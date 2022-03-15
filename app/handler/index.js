'use strict';

const ejs = require('ejs');
const e = require('express');
const np = require(nowPlayingPluginLibRoot + '/np');
const util = require(nowPlayingPluginLibRoot + '/util');
const apiHandlers = {
    'metadata': require(nowPlayingPluginLibRoot + '/metadata')
};

async function index(req, res) {
    let html = await renderView('index', req, {
        styles: np.getConfigValue('styles', {}, true),
        theme: np.getConfigValue('theme', 'default')
    });
    res.send(html);
}

async function volumio(req, res) {
    let html = await renderView('volumio', req, {
        nowPlayingUrl: getNowPlayingURL(req)
    });
    res.send(html);
}

async function preview(req, res) {
    let html = await renderView('preview', req, {
        nowPlayingUrl: getNowPlayingURL(req)
    });
    res.send(html);
}

async function api(namespace, method, params, res) {
    const apiHandler = namespace && method ? apiHandlers[namespace] : null;
    const fn = apiHandler && typeof apiHandler[method] === 'function' ? apiHandler[method] : null;
    if (fn) {
        console.log(`handler: found apiHandler for ${namespace}`);
        try {
            const result = await fn(params);
            res.json({
                success: true,
                data: result
            });
        } catch (e) {
            res.json({
                success: false,
                error: e.message || e
            });
        }
    }
    else {
        console.log(`handler not found for ${namespace}`);
        res.json({
            success: false,
            error: `Invalid API endpoint ${namespace}/${method}`
        });
    }
}

function getNowPlayingURL(req) {
    return `${req.protocol}://${ req.hostname }:${ np.getConfigValue('port', 4004) }`;
}

function renderView(name, req, data = {}) {
    if (!data.i18n) {
        data.i18n = np.getI18n.bind(np);
    }
    if (!data.host) {
        data.host = `${req.protocol}://${ req.hostname }:3000`;
    }
    if (!data.pluginVersion) {
        data.pluginVersion = util.getPluginVersion();
    }
    if (!data.appPort) {
        data.appPort = np.getConfigValue('port', 4004);
    }
    if (!data.apiPath) {
        data.apiPath = `${req.protocol}://${ req.hostname }:${data.appPort}/api`;
    }
    return new Promise( (resolve, reject) => {
        ejs.renderFile(`${ __dirname }/../views/${ name }.ejs`, data, {}, (err, str) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(str);
            }
        });
    });
}

module.exports = { index, volumio, preview, api };

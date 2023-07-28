// Auto-generated from ./src/UIConfig.json

import { UIConfigButton, UIConfigInput, UIConfigSelect, UIConfigSwitch } from "./UIConfig";
export type UIConfigSectionKey = 
              'section_daemon' | 
              'section_localization' | 
              'section_metadata_service' | 
              'section_weather_service' | 
              'section_text_styles' | 
              'section_widget_styles' | 
              'section_album_art_style' | 
              'section_background_style' | 
              'section_action_panel' | 
              'section_docked_menu' | 
              'section_docked_action_panel_trigger' | 
              'section_docked_volume_indicator' | 
              'section_docked_clock' | 
              'section_docked_weather' | 
              'section_idle_view' | 
              'section_extra_screens' | 
              'section_kiosk' | 
              'section_performance' | 
              'section_other';

export type UIConfigSectionContentKeyOf<K extends UIConfigSectionKey> =
  K extends 'section_daemon' ?
    'port' | 
    'url' | 
    'previewUrl' | 
    'openPreview' :

  K extends 'section_localization' ?
    'geoCoordinates' | 
    'geoCoordinatesGuide' | 
    'locale' | 
    'timezone' | 
    'unitSystem' :

  K extends 'section_metadata_service' ?
    'geniusAccessToken' | 
    'accessTokenGuide' | 
    'clearMetadataCache' :

  K extends 'section_weather_service' ?
    'clearWeatherCache' :

  K extends 'section_text_styles' ?
    'fontSizes' | 
    'titleFontSize' | 
    'artistFontSize' | 
    'albumFontSize' | 
    'mediaInfoFontSize' | 
    'seekTimeFontSize' | 
    'metadataFontSize' | 
    'fontColors' | 
    'titleFontColor' | 
    'artistFontColor' | 
    'albumFontColor' | 
    'mediaInfoFontColor' | 
    'seekTimeFontColor' | 
    'metadataFontColor' | 
    'textMargins' | 
    'titleMargin' | 
    'artistMargin' | 
    'albumMargin' | 
    'mediaInfoMargin' | 
    'textAlignmentH' | 
    'textAlignmentV' | 
    'textAlignmentLyrics' | 
    'maxLines' | 
    'maxTitleLines' | 
    'maxArtistLines' | 
    'maxAlbumLines' | 
    'trackInfoOrder' | 
    'trackInfoTitleOrder' | 
    'trackInfoArtistOrder' | 
    'trackInfoAlbumOrder' | 
    'trackInfoMediaInfoOrder' | 
    'trackInfoMarqueeTitle' :

  K extends 'section_widget_styles' ?
    'widgetColors' | 
    'widgetPrimaryColor' | 
    'widgetHighlightColor' | 
    'widgetVisibility' | 
    'playbackButtonsVisibility' | 
    'seekbarVisibility' | 
    'playbackButtonSizeType' | 
    'playbackButtonSize' | 
    'widgetMargins' | 
    'playbackButtonsMargin' | 
    'seekbarMargin' :

  K extends 'section_album_art_style' ?
    'albumartVisibility' | 
    'albumartSize' | 
    'albumartWidth' | 
    'albumartHeight' | 
    'albumartFit' | 
    'albumartBorder' | 
    'albumartBorderRadius' :

  K extends 'section_background_style' ?
    'backgroundType' | 
    'backgroundColor' | 
    'albumartBackgroundFit' | 
    'albumartBackgroundPosition' | 
    'albumartBackgroundBlur' | 
    'albumartBackgroundScale' | 
    'volumioBackgroundImage' | 
    'volumioBackgroundFit' | 
    'volumioBackgroundPosition' | 
    'volumioBackgroundBlur' | 
    'volumioBackgroundScale' | 
    'backgroundOverlay' | 
    'backgroundOverlayColor' | 
    'backgroundOverlayColorOpacity' | 
    'backgroundOverlayGradient' | 
    'backgroundOverlayGradientOpacity' :

  K extends 'section_action_panel' ?
    'showVolumeSlider' :

  K extends 'section_docked_menu' ?
    'enabled' :

  K extends 'section_docked_action_panel_trigger' ?
    'enabled' | 
    'iconSettings' | 
    'iconStyle' | 
    'iconSize' | 
    'iconColor' | 
    'opacity' | 
    'margin' :

  K extends 'section_docked_volume_indicator' ?
    'enabled' | 
    'placement' | 
    'displayOrder' | 
    'fontSettings' | 
    'fontSize' | 
    'fontSizePercentSymbol' | 
    'fontColor' | 
    'iconSettings' | 
    'iconSize' | 
    'iconColor' | 
    'margin' | 
    'showVolumeBarOnClick' | 
    'volumeBarPosition' | 
    'volumeBarOrientation' :

  K extends 'section_docked_clock' ?
    'enabled' | 
    'placement' | 
    'displayOrder' | 
    'showInfo' | 
    'fontSettings' | 
    'fontSize' | 
    'dateColor' | 
    'timeColor' | 
    'dateFormat' | 
    'yearFormat' | 
    'monthFormat' | 
    'dayFormat' | 
    'dayOfWeekFormat' | 
    'timeFormat' | 
    'hourFormat' | 
    'hour24' | 
    'showSeconds' | 
    'margin' :

  K extends 'section_docked_weather' ?
    'enabled' | 
    'placement' | 
    'displayOrder' | 
    'showHumidity' | 
    'showWindSpeed' | 
    'fontSettings' | 
    'fontSize' | 
    'fontColor' | 
    'iconSettings' | 
    'iconStyle' | 
    'iconSize' | 
    'iconMonoColor' | 
    'iconAnimate' | 
    'margin' :

  K extends 'section_idle_view' ?
    'enabled' | 
    'waitTime' | 
    'showLocation' | 
    'showWeather' | 
    'mainAlignment' | 
    'mainAlignmentCycleInterval' | 
    'timeFormat' | 
    'hour24' | 
    'showSeconds' | 
    'fontSizes' | 
    'timeFontSize' | 
    'dateFontSize' | 
    'locationFontSize' | 
    'weatherCurrentBaseFontSize' | 
    'weatherForecastBaseFontSize' | 
    'fontColors' | 
    'timeColor' | 
    'dateColor' | 
    'locationColor' | 
    'weatherCurrentColor' | 
    'weatherForecastColor' | 
    'weatherIconSettings' | 
    'weatherIconStyle' | 
    'weatherCurrentIconSize' | 
    'weatherForecastIconSize' | 
    'weatherCurrentIconMonoColor' | 
    'weatherForecastIconMonoColor' | 
    'weatherCurrentIconAnimate' | 
    'backgroundType' | 
    'backgroundColor' | 
    'volumioBackgroundImage' | 
    'volumioBackgroundFit' | 
    'volumioBackgroundPosition' | 
    'volumioBackgroundBlur' | 
    'volumioBackgroundScale' | 
    'unsplashKeywords' | 
    'unsplashKeywordsAppendDayPeriod' | 
    'unsplashMatchScreenSize' | 
    'unsplashRefreshInterval' | 
    'unsplashBackgroundBlur' | 
    'backgroundOverlay' | 
    'backgroundOverlayColor' | 
    'backgroundOverlayColorOpacity' | 
    'backgroundOverlayGradient' | 
    'backgroundOverlayGradientOpacity' | 
    'weatherBackground' | 
    'weatherBackgroundColor' | 
    'weatherBackgroundColorOpacity' | 
    'weatherBackgroundGradient' | 
    'weatherBackgroundGradientOpacity' :

  K extends 'section_extra_screens' ?
    'theme' :

  K extends 'section_performance' ?
    'transitionEffectsKiosk' | 
    'transitionEffectsOtherDevices' | 
    'unmountScreensOnExit' | 
    'unmountNowPlayingScreenOnExit' | 
    'unmountBrowseScreenOnExit' | 
    'unmountQueueScreenOnExit' | 
    'unmountVolumioScreenOnExit' :

  K extends 'section_other' ?
    'broadcastRefresh' | 
    'viewReadme' :

  never;

export type UIConfigElementOf<K extends UIConfigSectionKey, C extends UIConfigSectionContentKeyOf<K>> =
  K extends 'section_daemon' ? (
    C extends 'port' ? UIConfigInput<K, 'number'> :
    C extends 'url' ? UIConfigInput<K, 'text'> :
    C extends 'previewUrl' ? UIConfigInput<K, 'text'> :
    C extends 'openPreview' ? UIConfigButton<K> :
    never
  ) : 

  K extends 'section_localization' ? (
    C extends 'geoCoordinates' ? UIConfigInput<K, 'text'> :
    C extends 'geoCoordinatesGuide' ? UIConfigButton<K> :
    C extends 'locale' ? UIConfigSelect<K> :
    C extends 'timezone' ? UIConfigSelect<K> :
    C extends 'unitSystem' ? UIConfigSelect<K> :
    never
  ) : 

  K extends 'section_metadata_service' ? (
    C extends 'geniusAccessToken' ? UIConfigInput<K, 'text'> :
    C extends 'accessTokenGuide' ? UIConfigButton<K> :
    C extends 'clearMetadataCache' ? UIConfigButton<K> :
    never
  ) : 

  K extends 'section_weather_service' ? (
    C extends 'clearWeatherCache' ? UIConfigButton<K> :
    never
  ) : 

  K extends 'section_text_styles' ? (
    C extends 'fontSizes' ? UIConfigSelect<K> :
    C extends 'titleFontSize' ? UIConfigInput<K, 'text'> :
    C extends 'artistFontSize' ? UIConfigInput<K, 'text'> :
    C extends 'albumFontSize' ? UIConfigInput<K, 'text'> :
    C extends 'mediaInfoFontSize' ? UIConfigInput<K, 'text'> :
    C extends 'seekTimeFontSize' ? UIConfigInput<K, 'text'> :
    C extends 'metadataFontSize' ? UIConfigInput<K, 'text'> :
    C extends 'fontColors' ? UIConfigSelect<K> :
    C extends 'titleFontColor' ? UIConfigInput<K, 'color'> :
    C extends 'artistFontColor' ? UIConfigInput<K, 'color'> :
    C extends 'albumFontColor' ? UIConfigInput<K, 'color'> :
    C extends 'mediaInfoFontColor' ? UIConfigInput<K, 'color'> :
    C extends 'seekTimeFontColor' ? UIConfigInput<K, 'color'> :
    C extends 'metadataFontColor' ? UIConfigInput<K, 'color'> :
    C extends 'textMargins' ? UIConfigSelect<K> :
    C extends 'titleMargin' ? UIConfigInput<K, 'text'> :
    C extends 'artistMargin' ? UIConfigInput<K, 'text'> :
    C extends 'albumMargin' ? UIConfigInput<K, 'text'> :
    C extends 'mediaInfoMargin' ? UIConfigInput<K, 'text'> :
    C extends 'textAlignmentH' ? UIConfigSelect<K> :
    C extends 'textAlignmentV' ? UIConfigSelect<K> :
    C extends 'textAlignmentLyrics' ? UIConfigSelect<K> :
    C extends 'maxLines' ? UIConfigSelect<K> :
    C extends 'maxTitleLines' ? UIConfigInput<K, 'number'> :
    C extends 'maxArtistLines' ? UIConfigInput<K, 'number'> :
    C extends 'maxAlbumLines' ? UIConfigInput<K, 'number'> :
    C extends 'trackInfoOrder' ? UIConfigSelect<K> :
    C extends 'trackInfoTitleOrder' ? UIConfigInput<K, 'number'> :
    C extends 'trackInfoArtistOrder' ? UIConfigInput<K, 'number'> :
    C extends 'trackInfoAlbumOrder' ? UIConfigInput<K, 'number'> :
    C extends 'trackInfoMediaInfoOrder' ? UIConfigInput<K, 'number'> :
    C extends 'trackInfoMarqueeTitle' ? UIConfigSwitch<K> :
    never
  ) : 

  K extends 'section_widget_styles' ? (
    C extends 'widgetColors' ? UIConfigSelect<K> :
    C extends 'widgetPrimaryColor' ? UIConfigInput<K, 'color'> :
    C extends 'widgetHighlightColor' ? UIConfigInput<K, 'color'> :
    C extends 'widgetVisibility' ? UIConfigSelect<K> :
    C extends 'playbackButtonsVisibility' ? UIConfigSwitch<K> :
    C extends 'seekbarVisibility' ? UIConfigSwitch<K> :
    C extends 'playbackButtonSizeType' ? UIConfigSelect<K> :
    C extends 'playbackButtonSize' ? UIConfigInput<K, 'text'> :
    C extends 'widgetMargins' ? UIConfigSelect<K> :
    C extends 'playbackButtonsMargin' ? UIConfigInput<K, 'text'> :
    C extends 'seekbarMargin' ? UIConfigInput<K, 'text'> :
    never
  ) : 

  K extends 'section_album_art_style' ? (
    C extends 'albumartVisibility' ? UIConfigSwitch<K> :
    C extends 'albumartSize' ? UIConfigSelect<K> :
    C extends 'albumartWidth' ? UIConfigInput<K, 'text'> :
    C extends 'albumartHeight' ? UIConfigInput<K, 'text'> :
    C extends 'albumartFit' ? UIConfigSelect<K> :
    C extends 'albumartBorder' ? UIConfigInput<K, 'text'> :
    C extends 'albumartBorderRadius' ? UIConfigInput<K, 'text'> :
    never
  ) : 

  K extends 'section_background_style' ? (
    C extends 'backgroundType' ? UIConfigSelect<K> :
    C extends 'backgroundColor' ? UIConfigInput<K, 'color'> :
    C extends 'albumartBackgroundFit' ? UIConfigSelect<K> :
    C extends 'albumartBackgroundPosition' ? UIConfigSelect<K> :
    C extends 'albumartBackgroundBlur' ? UIConfigInput<K, 'text'> :
    C extends 'albumartBackgroundScale' ? UIConfigInput<K, 'text'> :
    C extends 'volumioBackgroundImage' ? UIConfigSelect<K> :
    C extends 'volumioBackgroundFit' ? UIConfigSelect<K> :
    C extends 'volumioBackgroundPosition' ? UIConfigSelect<K> :
    C extends 'volumioBackgroundBlur' ? UIConfigInput<K, 'text'> :
    C extends 'volumioBackgroundScale' ? UIConfigInput<K, 'text'> :
    C extends 'backgroundOverlay' ? UIConfigSelect<K> :
    C extends 'backgroundOverlayColor' ? UIConfigInput<K, 'color'> :
    C extends 'backgroundOverlayColorOpacity' ? UIConfigInput<K, 'text'> :
    C extends 'backgroundOverlayGradient' ? UIConfigInput<K, 'text'> :
    C extends 'backgroundOverlayGradientOpacity' ? UIConfigInput<K, 'text'> :
    never
  ) : 

  K extends 'section_action_panel' ? (
    C extends 'showVolumeSlider' ? UIConfigSwitch<K> :
    never
  ) : 

  K extends 'section_docked_menu' ? (
    C extends 'enabled' ? UIConfigSwitch<K> :
    never
  ) : 

  K extends 'section_docked_action_panel_trigger' ? (
    C extends 'enabled' ? UIConfigSwitch<K> :
    C extends 'iconSettings' ? UIConfigSelect<K> :
    C extends 'iconStyle' ? UIConfigSelect<K> :
    C extends 'iconSize' ? UIConfigInput<K, 'text'> :
    C extends 'iconColor' ? UIConfigInput<K, 'color'> :
    C extends 'opacity' ? UIConfigInput<K, 'text'> :
    C extends 'margin' ? UIConfigInput<K, 'text'> :
    never
  ) : 

  K extends 'section_docked_volume_indicator' ? (
    C extends 'enabled' ? UIConfigSwitch<K> :
    C extends 'placement' ? UIConfigSelect<K> :
    C extends 'displayOrder' ? UIConfigInput<K, 'number'> :
    C extends 'fontSettings' ? UIConfigSelect<K> :
    C extends 'fontSize' ? UIConfigInput<K, 'text'> :
    C extends 'fontSizePercentSymbol' ? UIConfigInput<K, 'text'> :
    C extends 'fontColor' ? UIConfigInput<K, 'color'> :
    C extends 'iconSettings' ? UIConfigSelect<K> :
    C extends 'iconSize' ? UIConfigInput<K, 'text'> :
    C extends 'iconColor' ? UIConfigInput<K, 'color'> :
    C extends 'margin' ? UIConfigInput<K, 'text'> :
    C extends 'showVolumeBarOnClick' ? UIConfigSwitch<K> :
    C extends 'volumeBarPosition' ? UIConfigSelect<K> :
    C extends 'volumeBarOrientation' ? UIConfigSelect<K> :
    never
  ) : 

  K extends 'section_docked_clock' ? (
    C extends 'enabled' ? UIConfigSwitch<K> :
    C extends 'placement' ? UIConfigSelect<K> :
    C extends 'displayOrder' ? UIConfigInput<K, 'number'> :
    C extends 'showInfo' ? UIConfigSelect<K> :
    C extends 'fontSettings' ? UIConfigSelect<K> :
    C extends 'fontSize' ? UIConfigInput<K, 'text'> :
    C extends 'dateColor' ? UIConfigInput<K, 'color'> :
    C extends 'timeColor' ? UIConfigInput<K, 'color'> :
    C extends 'dateFormat' ? UIConfigSelect<K> :
    C extends 'yearFormat' ? UIConfigSelect<K> :
    C extends 'monthFormat' ? UIConfigSelect<K> :
    C extends 'dayFormat' ? UIConfigSelect<K> :
    C extends 'dayOfWeekFormat' ? UIConfigSelect<K> :
    C extends 'timeFormat' ? UIConfigSelect<K> :
    C extends 'hourFormat' ? UIConfigSelect<K> :
    C extends 'hour24' ? UIConfigSwitch<K> :
    C extends 'showSeconds' ? UIConfigSwitch<K> :
    C extends 'margin' ? UIConfigInput<K, 'text'> :
    never
  ) : 

  K extends 'section_docked_weather' ? (
    C extends 'enabled' ? UIConfigSwitch<K> :
    C extends 'placement' ? UIConfigSelect<K> :
    C extends 'displayOrder' ? UIConfigInput<K, 'number'> :
    C extends 'showHumidity' ? UIConfigSwitch<K> :
    C extends 'showWindSpeed' ? UIConfigSwitch<K> :
    C extends 'fontSettings' ? UIConfigSelect<K> :
    C extends 'fontSize' ? UIConfigInput<K, 'text'> :
    C extends 'fontColor' ? UIConfigInput<K, 'color'> :
    C extends 'iconSettings' ? UIConfigSelect<K> :
    C extends 'iconStyle' ? UIConfigSelect<K> :
    C extends 'iconSize' ? UIConfigInput<K, 'text'> :
    C extends 'iconMonoColor' ? UIConfigInput<K, 'color'> :
    C extends 'iconAnimate' ? UIConfigSwitch<K> :
    C extends 'margin' ? UIConfigInput<K, 'text'> :
    never
  ) : 

  K extends 'section_idle_view' ? (
    C extends 'enabled' ? UIConfigSelect<K> :
    C extends 'waitTime' ? UIConfigInput<K, 'number'> :
    C extends 'showLocation' ? UIConfigSwitch<K> :
    C extends 'showWeather' ? UIConfigSwitch<K> :
    C extends 'mainAlignment' ? UIConfigSelect<K> :
    C extends 'mainAlignmentCycleInterval' ? UIConfigInput<K, 'number'> :
    C extends 'timeFormat' ? UIConfigSelect<K> :
    C extends 'hour24' ? UIConfigSwitch<K> :
    C extends 'showSeconds' ? UIConfigSwitch<K> :
    C extends 'fontSizes' ? UIConfigSelect<K> :
    C extends 'timeFontSize' ? UIConfigInput<K, 'text'> :
    C extends 'dateFontSize' ? UIConfigInput<K, 'text'> :
    C extends 'locationFontSize' ? UIConfigInput<K, 'text'> :
    C extends 'weatherCurrentBaseFontSize' ? UIConfigInput<K, 'text'> :
    C extends 'weatherForecastBaseFontSize' ? UIConfigInput<K, 'text'> :
    C extends 'fontColors' ? UIConfigSelect<K> :
    C extends 'timeColor' ? UIConfigInput<K, 'color'> :
    C extends 'dateColor' ? UIConfigInput<K, 'color'> :
    C extends 'locationColor' ? UIConfigInput<K, 'color'> :
    C extends 'weatherCurrentColor' ? UIConfigInput<K, 'color'> :
    C extends 'weatherForecastColor' ? UIConfigInput<K, 'color'> :
    C extends 'weatherIconSettings' ? UIConfigSelect<K> :
    C extends 'weatherIconStyle' ? UIConfigSelect<K> :
    C extends 'weatherCurrentIconSize' ? UIConfigInput<K, 'text'> :
    C extends 'weatherForecastIconSize' ? UIConfigInput<K, 'text'> :
    C extends 'weatherCurrentIconMonoColor' ? UIConfigInput<K, 'color'> :
    C extends 'weatherForecastIconMonoColor' ? UIConfigInput<K, 'color'> :
    C extends 'weatherCurrentIconAnimate' ? UIConfigSwitch<K> :
    C extends 'backgroundType' ? UIConfigSelect<K> :
    C extends 'backgroundColor' ? UIConfigInput<K, 'color'> :
    C extends 'volumioBackgroundImage' ? UIConfigSelect<K> :
    C extends 'volumioBackgroundFit' ? UIConfigSelect<K> :
    C extends 'volumioBackgroundPosition' ? UIConfigSelect<K> :
    C extends 'volumioBackgroundBlur' ? UIConfigInput<K, 'text'> :
    C extends 'volumioBackgroundScale' ? UIConfigInput<K, 'text'> :
    C extends 'unsplashKeywords' ? UIConfigInput<K, 'text'> :
    C extends 'unsplashKeywordsAppendDayPeriod' ? UIConfigSwitch<K> :
    C extends 'unsplashMatchScreenSize' ? UIConfigSwitch<K> :
    C extends 'unsplashRefreshInterval' ? UIConfigInput<K, 'number'> :
    C extends 'unsplashBackgroundBlur' ? UIConfigInput<K, 'text'> :
    C extends 'backgroundOverlay' ? UIConfigSelect<K> :
    C extends 'backgroundOverlayColor' ? UIConfigInput<K, 'color'> :
    C extends 'backgroundOverlayColorOpacity' ? UIConfigInput<K, 'text'> :
    C extends 'backgroundOverlayGradient' ? UIConfigInput<K, 'text'> :
    C extends 'backgroundOverlayGradientOpacity' ? UIConfigInput<K, 'text'> :
    C extends 'weatherBackground' ? UIConfigSelect<K> :
    C extends 'weatherBackgroundColor' ? UIConfigInput<K, 'color'> :
    C extends 'weatherBackgroundColorOpacity' ? UIConfigInput<K, 'text'> :
    C extends 'weatherBackgroundGradient' ? UIConfigInput<K, 'text'> :
    C extends 'weatherBackgroundGradientOpacity' ? UIConfigInput<K, 'text'> :
    never
  ) : 

  K extends 'section_extra_screens' ? (
    C extends 'theme' ? UIConfigSelect<K> :
    never
  ) : 

  K extends 'section_performance' ? (
    C extends 'transitionEffectsKiosk' ? UIConfigSwitch<K> :
    C extends 'transitionEffectsOtherDevices' ? UIConfigSwitch<K> :
    C extends 'unmountScreensOnExit' ? UIConfigSelect<K> :
    C extends 'unmountNowPlayingScreenOnExit' ? UIConfigSwitch<K> :
    C extends 'unmountBrowseScreenOnExit' ? UIConfigSwitch<K> :
    C extends 'unmountQueueScreenOnExit' ? UIConfigSwitch<K> :
    C extends 'unmountVolumioScreenOnExit' ? UIConfigSwitch<K> :
    never
  ) : 

  K extends 'section_other' ? (
    C extends 'broadcastRefresh' ? UIConfigButton<K> :
    C extends 'viewReadme' ? UIConfigButton<K> :
    never
  ) : 

  never;


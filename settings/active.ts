export default {
  '.window-icon': 'position: relative; flex-grow: 1; max-width: 26px',
  '.window-icon::after':
    "opacity: 0; content: ''; left: 50%; top: 50%; transform: translate(-50%, -50%); transition: 0.2s ease-in-out",
  '.window-icon:hover::after':
    "opacity: 1; position: absolute; content: ''; width: 12px !important; height: 12px !important;",
  '.window-icon::before':
    "position: absolute; content: ''; width: 14px !important; height: 14px !important; border-radius: 50%; transition: 0.1s ease-in-out",
  '.window-icon:hover': 'background-color: transparent !important',
  '.window-minimize::before':
    'background-color: #fdbd3d !important; box-shadow: inset 0 0 0 1px #d7a240',
  '.window-minimize:hover::after':
    'background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i0KHQu9C+0LlfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMiAxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIgMTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNCMzcxMUE7c3Ryb2tlOiNCMzcxMUE7c3Ryb2tlLXdpZHRoOjAuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEwLDUuNEgydjEuMmg4VjUuNHoiLz4NCjwvc3ZnPg0K);',
  '.window-max-restore::before':
    'background-color: #26c84b !important; box-shadow: inset 0 0 0 1px #349c3d',
  '.window-max-restore:hover::after':
    'background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i0KHQu9C+0LlfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMiAxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIgMTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiMwMjZBMTU7c3Ryb2tlOiMwMjZBMTU7c3Ryb2tlLXdpZHRoOjAuMjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03LjQsM0wzLDcuNEwyLjgsMi44TDcuNCwzeiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQuNiw5TDksNC42bDAuMiw0LjZMNC42LDl6Ii8+DQo8L3N2Zz4NCg==);',
  '.window-close::before':
    'background-color: #ff5c57 !important; box-shadow: inset 0 0 0 1px #d44b4e',
  '.window-close:hover::after':
    'background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i0KHQu9C+0LlfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMiAxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIgMTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNBMjAwMDg7c3Ryb2tlOiNBMjAwMDg7c3Ryb2tlLXdpZHRoOjAuNzU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01LjMsNkwyLjgsMy41bDAuNy0wLjdMNiw1LjNsMi41LTIuNWwwLjcsMC43TDYuNyw2bDIuNSwyLjVMOC41LDkuMkw2LDYuN0wzLjUsOS4yTDIuOCw4LjVMNS4zLDZ6Ii8+DQo8L3N2Zz4NCg==);',
  '.window-controls-container.primary':
    'max-height: 16px !important; justify-content: start; padding: 0 10px 0 0 !important; flex-direction: row-reverse; padding: 0 0 0 10px !important',
  '.titlebar-left': 'order: 2 !important; flex-direction: row-reverse',
  '.titlebar-right': 'order: 0 !important; flex-direction: row-reverse',
  '.part.titlebar.light.inactive .window-icon::before':
    'background-color: #dcdcdc !important; box-shadow: none',
  '.part.titlebar.inactive .window-icon::before':
    'background-color: #545454 !important; box-shadow: none',
  '.window-minimize': 'order: 2',
  '.window-max-restore': 'order: 1',
  '.window-close': 'order: 3',
  '.inline-title-bar:not(.activitybar-top):not(.statusbar-top) .monaco-workbench:not(.fullscreen) .sidebar .composite.title .title-label':
    'display: contents',
  '.inline-title-bar:not(.activitybar-top):not(.statusbar-top).monaco-workbench:not(.fullscreen).sidebar.composite.title.title-label':
    'justify-content: space-between',
  '.inline-title-bar:not(.activitybar-top):not(.statusbar-top) .monaco-workbench:not(.fullscreen) .sidebar .composite.title .title-actions':
    'flex: 1 !important'
}

!(function () {
    function t(t, e) {
        (this.title = t.title),
            (this.stateName = t.stateName ? t.stateName : "unnamed-state"),
            (this.icon = L.DomUtil.create("span", "")),
            L.DomUtil.addClass(this.icon, "button-state state-" + this.stateName.replace(/(^\s*|\s*$)/g, "")),
            (this.icon.innerHTML = i(t.icon)),
            (this.onClick = L.Util.bind(t.onClick ? t.onClick : function () {}, e));
    }
    function i(t) {
        var i;
        return (
            t.match(/[&;=<>"']/)
                ? (i = t)
                : ((t = t.replace(/(^\s*|\s*$)/g, "")),
                  (i = L.DomUtil.create("span", "")),
                  0 === t.indexOf("fa-") ? L.DomUtil.addClass(i, "fa " + t) : 0 === t.indexOf("glyphicon-") ? L.DomUtil.addClass(i, "glyphicon " + t) : L.DomUtil.addClass(i, t),
                  (i = i.outerHTML)),
            i
        );
    }
    (L.Control.EasyBar = L.Control.extend({
        options: { position: "topleft", id: null, leafletClasses: !0 },
        initialize: function (t, i) {
            i && L.Util.setOptions(this, i), this._buildContainer(), (this._buttons = []);
            for (var e = 0; e < t.length; e++) (t[e]._bar = this), (t[e]._container = t[e].button), this._buttons.push(t[e]), this.container.appendChild(t[e].button);
        },
        _buildContainer: function () {
            (this._container = this.container = L.DomUtil.create("div", "")),
                this.options.leafletClasses && L.DomUtil.addClass(this.container, "leaflet-bar easy-button-container leaflet-control"),
                this.options.id && (this.container.id = this.options.id);
        },
        enable: function () {
            return L.DomUtil.addClass(this.container, "enabled"), L.DomUtil.removeClass(this.container, "disabled"), this.container.setAttribute("aria-hidden", "false"), this;
        },
        disable: function () {
            return L.DomUtil.addClass(this.container, "disabled"), L.DomUtil.removeClass(this.container, "enabled"), this.container.setAttribute("aria-hidden", "true"), this;
        },
        onAdd: function () {
            return this.container;
        },
        addTo: function (t) {
            this._map = t;
            for (var i = 0; i < this._buttons.length; i++) this._buttons[i]._map = t;
            var e = (this._container = this.onAdd(t)),
                s = this.getPosition(),
                n = t._controlCorners[s];
            return L.DomUtil.addClass(e, "leaflet-control"), -1 !== s.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this;
        },
    })),
        (L.easyBar = function () {
            for (var t = [L.Control.EasyBar], i = 0; i < arguments.length; i++) t.push(arguments[i]);
            return new (Function.prototype.bind.apply(L.Control.EasyBar, t))();
        }),
        (L.Control.EasyButton = L.Control.extend({
            options: { position: "topleft", id: null, type: "replace", states: [], leafletClasses: !0 },
            initialize: function (i, e, s, n) {
                (this.options.states = []),
                    null != n && (this.options.id = n),
                    (this.storage = {}),
                    "object" == typeof arguments[arguments.length - 1] && L.Util.setOptions(this, arguments[arguments.length - 1]),
                    0 === this.options.states.length && "string" == typeof i && "function" == typeof e && this.options.states.push({ icon: i, onClick: e, title: "string" == typeof s ? s : "" }),
                    (this._states = []);
                for (var o = 0; o < this.options.states.length; o++) this._states.push(new t(this.options.states[o], this));
                this._buildButton(), this._activateState(this._states[0]);
            },
            _buildButton: function () {
                if (
                    ((this.button = L.DomUtil.create("button", "")),
                    this.options.id && (this.button.id = this.options.id),
                    this.options.leafletClasses && L.DomUtil.addClass(this.button, "easy-button-button leaflet-bar-part"),
                    L.DomEvent.addListener(this.button, "dblclick", L.DomEvent.stop),
                    L.DomEvent.addListener(
                        this.button,
                        "click",
                        function (t) {
                            L.DomEvent.stop(t), this._currentState.onClick(this, this._map ? this._map : null), this._map.getContainer().focus();
                        },
                        this
                    ),
                    "replace" == this.options.type)
                )
                    this.button.appendChild(this._currentState.icon);
                else for (var t = 0; t < this._states.length; t++) this.button.appendChild(this._states[t].icon);
            },
            _currentState: {
                stateName: "unnamed",
                icon: (function () {
                    return document.createElement("span");
                })(),
            },
            _states: null,
            state: function (t) {
                return "string" == typeof t ? this._activateStateNamed(t) : "number" == typeof t && this._activateState(this._states[t]), this;
            },
            _activateStateNamed: function (t) {
                for (var i = 0; i < this._states.length; i++) this._states[i].stateName == t && this._activateState(this._states[i]);
            },
            _activateState: function (t) {
                if (t !== this._currentState) {
                    "replace" == this.options.type && (this.button.appendChild(t.icon), this.button.removeChild(this._currentState.icon)), t.title ? (this.button.title = t.title) : this.button.removeAttribute("title");
                    for (var i = 0; i < this._states.length; i++) L.DomUtil.removeClass(this._states[i].icon, this._currentState.stateName + "-active"), L.DomUtil.addClass(this._states[i].icon, t.stateName + "-active");
                    L.DomUtil.removeClass(this.button, this._currentState.stateName + "-active"), L.DomUtil.addClass(this.button, t.stateName + "-active"), (this._currentState = t);
                }
            },
            enable: function () {
                return L.DomUtil.addClass(this.button, "enabled"), L.DomUtil.removeClass(this.button, "disabled"), this.button.setAttribute("aria-hidden", "false"), this;
            },
            disable: function () {
                return L.DomUtil.addClass(this.button, "disabled"), L.DomUtil.removeClass(this.button, "enabled"), this.button.setAttribute("aria-hidden", "true"), this;
            },
            removeFrom: function (t) {
                return this._container.parentNode.removeChild(this._container), (this._map = null), this;
            },
            onAdd: function () {
                var t = L.easyBar([this], { position: this.options.position, leafletClasses: this.options.leafletClasses });
                return (this._container = t.container), this._container;
            },
        })),
        (L.easyButton = function () {
            var t = Array.prototype.concat.apply([L.Control.EasyButton], arguments);
            return new (Function.prototype.bind.apply(L.Control.EasyButton, t))();
        });
})();

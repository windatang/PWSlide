(function() {
	function i(a, c) {
		if (c in a) return c;
		for (var d = c.charAt(0).toUpperCase() + c.slice(1), e = c, f = b.length; f--;) if ((c = b[f] + d) in a) return c;
		return e
	}
	function j(a, b) {
		if (b) for (var c in b) a.hasOwnProperty(c) && (a[c] = b[c]);
		return a
	}
	function k(a) {
		return a ? (e.isString(a) || (a = "fx"), a) : !!a
	}
	var a = "transition",
	b = ["Webkit", "Moz", "ms", "O"],
	c = {},
	d = Object.prototype.toString,
	e = {
		forEach: Array.prototype.forEach ?
		function(a, b) {
			a.forEach(b)
		}: function(a, b) {
			for (var c = 0; a.length > c; c++) b(a[c], c, a)
		},
		keys: Object.keys ||
		function(a) {
			var b = [];
			for (var c in a) a.hasOwnProperty(c) && b.push(c);
			return b
		},
		isString: function(a) {
			return "[object String]" === d.call(a)
		},
		isFunction: function(a) {
			return "[object Function]" === d.call(a)
		}
	}; (function() {
		var b = {};
		b[a] = a,
		b.transform = "transform2D",
		b.perspective = "transform3D";
		var c = document.documentElement,
		d = c.style;
		e.forEach(e.keys(b),
		function(a) {
			$.support[b[a]] = ($.cssProps[a] = i(d, a)) in d
		}),
		c = null
	})();
	var f = {
		WebkitTransition: "webkitTransitionEnd",
		MozTransition: "transitionend",
		msTransition: "MSTransitionEnd",
		OTransition: "oTransitionEnd",
		transition: "transitionend"
	},
	g = f[$.cssProps[a]],
	h = function(a, b, c) {
		return a = a && a.jquery ? a[0] : e.isString(a) ? document.getElementById(a) : a,
		this.$element = $(a),
		1 === arguments.length ? this: this.run(b, c)
	};
	if (h.prototype.run = function(b, d) {
		function o(c) {
			setTimeout(function() {
				f.css(b).on(g,
				function() {
					f.off(g).css(a, ""),
					e.isFunction(l) && l.call(f[0]),
					e.isFunction(c) && c()
				})
			},
			1)
		}
		var f = this.$element;
		if (!f.length) return ! 1;
		b || (b = {}),
		d = j({
			duration: "0.5s",
			easing: "ease",
			delay: "0s",
			queue: !0,
			onTransitionEnd: null
		},
		d),
		this._cssProps = e.keys(b),
		this._options = d;
		var n,
		h = k(d.queue),
		l = d.onTransitionEnd,
		m = [];
		e.forEach(this._cssProps,
		function(a) {
			n = a,
			c[n] ? a = c[n] : (a = $.camelCase(a), a = $.cssProps[a] || ($.cssProps[a] = i(f[0].style, a)), a = a.replace(/^(ms)/,
			function() {
				return "Ms"
			}).replace(/([A-Z])/g,
			function(a) {
				return "-" + a.toLowerCase()
			}), c[n] = a),
			m.push([].concat(a, d.duration, d.easing, d.delay).join(" "))
		}),
		b[a] = m.join(","),
		h ? f.queue(h,
		function(a) {
			o(a)
		}) : o()
	},
	h.prototype.stop = function() {
		var b = this.$element,
		c = k(this._options.queue),
		d = [].slice.call(arguments),
		f = {}; ! d[1] && e.forEach(this._cssProps,
		function(a) {
			f[a] = $.css(b[0], a)
		}),
		f[$.cssProps[a] + "Property"] = "none",
		c && d.unshift(c),
		b.off(g).css(f)
	},
	$.fn.transition = function(b, c) {
		return this.each(function() {
			$.data(this, a, new h(this, b, c))
		})
	},
	$.support[a]) {
		var l = $.fn.stop;
		$.fn.stop = function() {
			var d,
			b = this,
			c = arguments;
			b.each(function() { (d = $.data(this, a)) instanceof h && d.stop.apply(d, c),
				l.apply(b, c)
			})
		}
	}
})();
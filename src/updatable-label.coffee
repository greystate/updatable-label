class UpdatableLabel
	constructor: (el) ->
		@el = el or document.querySelector el
		if @el
			@label = @el.textContent

	update: (newLabel) ->
		@label = newLabel
		@changed()
	
	changed: =>
		@el?.textContent = @label
	
	# Convenience methods for manipulating the CSS class of the label
	addClass: (className) -> @el.classList.add className
	removeClass: (className) -> @el.classList.remove className
	setClass: (className) -> @el.className = className

window.UpdatableLabel = UpdatableLabel

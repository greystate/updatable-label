var UpdatableLabel,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

UpdatableLabel = (function() {
  function UpdatableLabel(el) {
    this.changed = bind(this.changed, this);
    this.el = el || document.querySelector(el);
    if (this.el) {
      this.label = this.el.textContent;
    }
  }

  UpdatableLabel.prototype.update = function(newLabel) {
    this.label = newLabel;
    return this.changed();
  };

  UpdatableLabel.prototype.changed = function() {
    var ref;
    return (ref = this.el) != null ? ref.textContent = this.label : void 0;
  };

  UpdatableLabel.prototype.addClass = function(className) {
    return this.el.classList.add(className);
  };

  UpdatableLabel.prototype.removeClass = function(className) {
    return this.el.classList.remove(className);
  };

  UpdatableLabel.prototype.setClass = function(className) {
    return this.el.className = className;
  };

  return UpdatableLabel;

})();

window.UpdatableLabel = UpdatableLabel;

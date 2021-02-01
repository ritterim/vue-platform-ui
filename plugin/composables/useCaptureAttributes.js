/**
 * When used along with `inheritAttrs` set to `false` on the component, returns an object with `classes` and 
 *  a `rest` object containing the remaining attributes
 * @param {VueComponent} component pass in `this` or the component instance 
 * @param {String} baseClass css class(es) in a string that will be added to the value of the inherited `class` attribute.
 */
export default function useCaptureAttributes(component, baseClass) {
  const rootClasses = component.$attrs.class ? ` ${component.$attrs.class}` : '';
  const classes = (baseClass || '') + rootClasses;

  const rest = component.$attrs ? { ...component.$attrs, class: 'to_delete' } : { class: 'to_delete' };
  delete rest.class;

  return {
    classes,
    rest
  }
}
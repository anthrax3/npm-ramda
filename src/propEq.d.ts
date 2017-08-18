import { Property } from "./$types";
/**
 * Returns `true` if the specified object property is equal, in
 * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig String -> a -> Object -> Boolean
 * @param {String} name
 * @param {*} val
 * @param {*} obj
 * @return {Boolean}
 * @see R.equals, R.propSatisfies
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      var kids = [abby, fred, rusty, alois];
 *      var hasBrownHair = R.propEq('hair', 'brown');
 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
 */
declare const propEq: propEq_000;
type propEq_000 = {
    (key: Property): propEq_100;
    (key: Property, value: any): propEq_110;
    <$SEL extends "1">(): (key: Property) => propEq_100;
    <$SEL extends "11">(): (key: Property, value: any) => propEq_110;
    <$SEL extends "111">(): (key: Property, value: any, object: {}) => propEq_111;
    (key: Property, value: any, object: {}): propEq_111;
};
type propEq_100 = {
    (value: any): propEq_110;
    <$SEL extends "1">(): (value: any) => propEq_110;
    <$SEL extends "11">(): (value: any, object: {}) => propEq_111;
    (value: any, object: {}): propEq_111;
};
type propEq_110 = {
    (object: {}): propEq_111;
};
type propEq_111 = boolean;
export = propEq;

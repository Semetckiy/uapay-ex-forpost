export class ArrayHelper {

  /**
   * Takes an array of items and the name of a property of these items, and returns an array of the items grouped
   * by the given property.
   * Example 1 : groupBy(['one', 'two', 'three'], 'length') would return {3: ['one', 'two'], 5: ['three']}
   * Example 2 : groupBy(
   *   [{type:'Dog', name:'Spot'}, {type:'Cat', name:'Tiger'}, {type:'Dog', name:'Rover'}, {type:'Cat', name:'Leo'}],
   *   'type'
   *  ) would return {
   *     'Dog': [{type:'Dog', name:'Spot'}, {type:'Dog', name:'Rover'}],
   *     'Cat': [{type:'Cat', name:'Leo'}, {type:'Cat', name:'Tiger'}]
   *   }
   * @param items array of items
   * @param itemProperty name of the property for which we want the our items to be grouped
   */
  public static groupBy<TItem>(items: TItem[], itemProperty: string) {
    return items.reduce((accumulator, currentValue) => {
      (accumulator[currentValue[itemProperty]] = accumulator[currentValue[itemProperty]] || []).push(currentValue);
      return accumulator;
    }, {});
  }
}

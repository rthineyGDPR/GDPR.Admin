import { ODataAdaptor } from '@syncfusion/ej2-data';
import { Log } from '../../api/core-api.service';

class LogAdaptor extends ODataAdaptor {
  public processResponse(): Object {
    let i: number = 0;
    //calling base class processResponse function
    let original: Log[] = super.processResponse.apply(this, arguments);
    //Adding serial number
    original.forEach((item: Log) => (item['Sno'] = ++i));
    return original;
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { OrderPaymentStatus } from '../types/order-payment-status.enum';

@Pipe({
    name: 'orderPaymentStatus'
})
export class OrderPaymentStatusPipe implements PipeTransform {

    transform(value: OrderPaymentStatus, args?: any): any {
        let result = "";
        switch (+value) {
            case OrderPaymentStatus.Initializing:
                result = "审核中";
                break;
            case OrderPaymentStatus.Waiting:
                result = "待付款";
                break;
            case OrderPaymentStatus.Completed:
                result = "已完成";
                break;
            case OrderPaymentStatus.Closed:
                result = "已关闭";
                break;
            case OrderPaymentStatus.Exception:
                result = "异常";
                break;
        }
        return result;
    }

}

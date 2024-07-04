import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderItemUpdateManyWithoutOrdersInput } from "./OrderItemUpdateManyWithoutOrdersInput";
import { PaymentUpdateManyWithoutOrdersInput } from "./PaymentUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  orderDate?: Date | null;
  orderItems?: OrderItemUpdateManyWithoutOrdersInput;
  payments?: PaymentUpdateManyWithoutOrdersInput;
  totalAmount?: number | null;
};

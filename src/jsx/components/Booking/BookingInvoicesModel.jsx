import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal } from 'react-bootstrap';




const BookingInvoicesModel = forwardRef((props, ref) => {
    //states
    const [InvicesBooking, setInvicesBooking] = useState(false);
    const [isloading, setisloading] = useState(false)


    //functions
    useImperativeHandle(ref, () => ({
        showInvoicesModal() {
            setInvicesBooking(true)
        }
    }));
    function printInvoice() {
        window.print();
    }
    const modalStyles = {
        '--bs-modal-width': '900px',
      };
      
      let Meals = "";
      if (props.InvoicesBooking.Meals && props.InvoicesBooking.Meals.length > 0) {
        const Mealss = props.InvoicesBooking.Meals.map(Meals => Meals.Meal);
        Meals = Mealss.join(", ");
      }
  
      let OtherServices = "";
      if (props.InvoicesBooking.Otherservices && props.InvoicesBooking.Otherservices.length > 0) {
        const Otherservicess = props.InvoicesBooking.Otherservices.map(Otherservices => Otherservices.Services);
        OtherServices = Otherservicess.join(", ");
      }

    return (
        <>
            <Modal className="modal fade w-100 ps--scrolling-y" style={modalStyles} id="exampleModal1" show={InvicesBooking} onHide={setInvicesBooking} centered>
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel1">{props.Title}</h1>
                        <button type="button" className="btn-close" onClick={() => setInvicesBooking(false)}></button>
                    </div>
                    <div className="container">
                        <div class="invoice">
                            <div class="invoice-container">
                                <div class="invoice-head">
                                    <div class="invoice-head-top">
                                        <div class="invoice-head-top-left text-start">
                                            <img src="images/logo.png" />
                                        </div>
                                        <div class="invoice-head-top-right text-end">
                                            <h3>فاتورة حجز</h3>
                                        </div>
                                    </div>
                                    <div class="hr"></div>
                                    <div class="invoice-head-middle">
                                        <div class="invoice-head-middle-left text-start">
                                            <p><span class="text-bold">رقم الفاتورة</span>: 1001</p>
                                            <p><span class="text-bold">رقم الحجز</span>: 2001</p>
                                            <p><span class="text-bold">تاريخ الحجز</span>: 05/12/2020</p>
                                        </div>
                                        <div class="invoice-head-middle-right text-end">
                                            <p><span class="">منتجع اليت السياحي </span><i class="fa-solid fa-hotel ps-2"></i></p>
                                            <p><span class=""> 091000000/09200000</span> <i class="fa-solid fa-phone ps-2"></i></p>
                                            <p><span class=""> info@elete.com </span><i class="fa-solid fa-envelope ps-2"> </i></p>

                                        </div>
                                    </div>
                                    <div class="hr"></div>
                                    <div class="invoice-head-bottom">
                                        <div class="invoice-head-bottom-left">
                                            <ul>
                                                <li class='text-bold pb-3'>: الدفع إلى</li>
                                                <li class="pb-1"> <span class=" text-bold ps-2 ">قيمة الضمان: </span>{props.InvoicesBooking.Paymentofuarantee }  </li>
                                                <li class="pb-1"> <span class=" text-bold ps-2 pb-1">  تسليم الضمان : </span> {props.InvoicesBooking.uarantee } </li>
                                                <li class="pb-1"> <span class=" text-bold ps-2 pb-1"> تاريخ الدخول:  </span> {props.InvoicesBooking.EntryDate } </li>
                                                <li class="pb-1"> <span class=" text-bold ps-2 pb-1"> وقت الدخول:  </span>  </li>
                                                <li class="pb-1"> <span class=" text-bold ps-2 pb-1"> تاريخ الخروج:  </span> {props.InvoicesBooking.ExitDate }  </li>
                                                <li> <span class=" text-bold ps-2 pb-3"> وقت الخروج:  </span>  </li>
                                            </ul>
                                        </div>
                                        <div class="invoice-head-bottom-right">
                                            <ul class="text-end">
                                                <li class='text-bold pb-3' >: الفاتورة إلى</li>
                                                <li class="pb-1"> <span class=" text-bold ps-2 "> اسم الضيف: </span> {props.InvoicesBooking.firstName } </li>
                                                <li class="pb-1"> <span class=" text-bold ps-2">  رقم الضيف: </span> {props.InvoicesBooking.phoneNumber } </li>
                                                <li class="pb-1"> <span class=" text-bold ps-2"> عنوان الضيف: </span> {props.InvoicesBooking.Residentialِddress }  </li>
                                                <li class="pb-1"> <span class=" text-bold ps-2"> عدد الضيوف: </span> {props.InvoicesBooking.Numberofguests } </li>
                                                <li class=" ">

                                                    <span>{props.InvoicesBooking.ChaletName }</span>
                                                    <span class="text-bold ps-2">:أسم الشاليه</span>
                                                </li>



                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="invoice-body">
                                        <table>
                                            <thead class=" text-center">
                                                <tr>
                                                    <td class="text-bold">الإجمالي</td>
                                                    <td class="text-bold">عدد الأيام </td>
                                                    <td class="text-bold">السعر في اليوم</td>
                                                    <td class="text-bold">الخدمة</td>

                                                </tr>
                                            </thead>
                                            <tbody class=" text-center">
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td><span>عربون الأقامة:</span>{props.InvoicesBooking.Typeofaccommodation }</td>


                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>2</td>
                                                    <td>{props.InvoicesBooking.Otherservicesperday }</td>
                                                    <td><span>الخدمات:</span> {OtherServices } </td>
                                                </tr>
                                                <tr>
                                                    <td>500</td>
                                                    <td>25</td>
                                                    <td>{props.InvoicesBooking.mealspriceperday }</td>
                                                    <td><span>الوجبات:</span>{Meals} </td>

                                                </tr>
                                                <tr>
                                                    <td>500</td>
                                                    <td>25</td>
                                                    <td>{props.InvoicesBooking.Extrapriceperpersonperday}</td>
                                                    <td><span>عدد الأفراد الزائد:</span>{props.InvoicesBooking.ExcessNumber }</td>

                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="invoice-body-bottom">
                                            <div class="invoice-body-info-item border-bottom">
                                                <div class="info-item-td text-center pe-5 ">500 دل</div>
                                                <div class="info-item-td  text-bold">المجموع </div>
                                            </div>
                                            <div class="invoice-body-info-item border-bottom">
                                                <div class="info-item-td text-center pe-5 ">10%</div>
                                                <div class="info-item-td  text-bold">التخفيض</div>

                                            </div>
                                            <div class="invoice-body-info-item">
                                                <div class="info-item-td text-center  pe-5">دل 21365.00</div>
                                                <div class="info-item-td  text-bold">الإجمالي</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class=" invoice-head-bottom">

                                    <div class="pt-3">
                                        <div class="invoice-body-info-items  ">
                                            <div class=" text-center pe-5 ">500 دل</div>
                                            <div class="  text-bold">المدفوع </div>

                                        </div>
                                        <div class="invoice-body-info-items pt-3 ">
                                            <div class=" text-center pe-5  "> <span class="inov-bg"> 200 دل</span></div>
                                            <div class="  text-bold">باقي قيمة الحجز </div>

                                        </div>
                                        <div class="invoice-body-info-items pt-3 ">
                                            <div class=" text-center pe-5  "> <span class=" inov-bg"> 10/10/2024</span></div>
                                            <div class="  text-bold">اخر مهلة لدفع باقي االيقمة </div>

                                        </div>
                                    </div>


                                    <div class=" text-end">

                                        <img
                                            src="./images/qrcode.png"
                                            class="w-25"
                                            alt=""
                                        />

                                    </div>


                                </div>
                                <div class="invoice-foot text-center">
                                    <p><span class="text-bold text-center">NOTE:&nbsp;</span>This is computer generated receipt and does not require physical signature.</p>

                                    <div class="invoice-btns">
                                        <button type="button" class="invoice-btn" onClick={() => printInvoice()}>
                                            <span>
                                                <i class="fa-solid fa-print"></i>
                                            </span>
                                            <span>Print</span>
                                        </button>
                                        <button type="button" class="invoice-btn">
                                            <span>
                                                <i class="fa-solid fa-download"></i>
                                            </span>
                                            <span>Download</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </Modal>
        </>
    )
})
export default BookingInvoicesModel;
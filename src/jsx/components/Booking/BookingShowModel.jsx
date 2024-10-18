import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal } from 'react-bootstrap';




const BookingShowModel = forwardRef((props, ref) => {
    //states
    const [inviteModal, setInviteModal] = useState(false);
    const [isloading, setisloading] = useState(false)


    //functions
    useImperativeHandle(ref, () => ({
        showInviteModal() {
            setInviteModal(true)
        }
    }));

    let Meals = "";
    if (props.viweModelData.Meals && props.viweModelData.Meals.length > 0) {
      const Mealss = props.viweModelData.Meals.map(Meals => Meals.Meal);
      Meals = Mealss.join(", ");
    }

    let OtherServices = "";
    if (props.viweModelData.Otherservices && props.viweModelData.Otherservices.length > 0) {
      const Otherservicess = props.viweModelData.Otherservices.map(Otherservices => Otherservices.Services);
      OtherServices = Otherservicess.join(", ");
    }
    const ShowModelDate = [
        { subtitle: props.viweModelData.firstName,maintitle:"First Name",CardColor:"primary" },
        { subtitle: props.viweModelData.LastName,maintitle:"Last Name" ,CardColor:"success" },
        { subtitle: props.viweModelData.phoneNumber,maintitle:"Phone Number" ,CardColor:"primary" },
        { subtitle: props.viweModelData.whatsappNumber,maintitle: "Whatsapp Number",CardColor:"success" },
        { subtitle: props.viweModelData.Residentialِddress,maintitle:"Residentialِ address" ,CardColor:"primary" },
        { subtitle: props.viweModelData.Typeofaccommodation,maintitle:"Type Of Accommodation" ,CardColor:"success" },
        { subtitle: props.viweModelData.Guesttype,maintitle:"Guest Type" ,CardColor:"primary" },
        { subtitle: props.viweModelData.ChaletName,maintitle:"Chalet Name" ,CardColor:"success" },
        { subtitle: props.viweModelData.Numberofguests,maintitle:"Number Of Guests" ,CardColor:"primary" },
        { subtitle: props.viweModelData.Numberofadults,maintitle:"Number Of Adults" ,CardColor:"success" },
        { subtitle: props.viweModelData.Numberofchildren,maintitle:"Number Of Children" ,CardColor:"primary" },
        { subtitle: props.viweModelData.ExcessNumber,maintitle: "Excess Number",CardColor:"success" },
        { subtitle: Meals,maintitle:"Meals" ,CardColor:"primary" },
        { subtitle: OtherServices,maintitle:"Other Services" ,CardColor:"success" },
        { subtitle: props.viweModelData.Extrapriceperpersonperday,maintitle:"Extra Price Per Person Per Day",CardColor:"primary" },
        { subtitle: props.viweModelData.EntryDate, maintitle: "Entry Date", CardColor: "success" },
        { subtitle: props.viweModelData.ExitDate,maintitle:"Exit Date",CardColor:"primary" },
        { subtitle: props.viweModelData.mealspriceperday, maintitle: "Meals Price Per Day", CardColor: "success" },
        { subtitle: props.viweModelData.Otherservicesperday,maintitle:"Other Services Per Day",CardColor:"primary" },
        { subtitle: props.viweModelData.numberofday, maintitle: "Number Of day", CardColor: "success" },
        { subtitle: props.viweModelData.paymentMethod,maintitle:"Payment Method",CardColor:"primary" },
        { subtitle: props.viweModelData.Paytherestoftheamount, maintitle: "Paytherestofthe Amount", CardColor: "success" },
        { subtitle: props.viweModelData.Paymentofuarantee,maintitle:"Payment Of Uarantee",CardColor:"primary" },
        { subtitle: props.viweModelData.uarantee, maintitle: "Uarantee", CardColor: "success" },
        { subtitle: props.viweModelData.TotalAfterDiscount,maintitle:"Total After Discount",CardColor:"primary" },
        { subtitle: props.viweModelData.Total, maintitle: "Total", CardColor: "success" },
        { subtitle: props.viweModelData.Deadline,maintitle:"Deadline",CardColor:"primary" },
        { subtitle: props.viweModelData.Discount, maintitle: "Discount", CardColor: "success" },
        { subtitle: props.viweModelData.Paid,maintitle:"Paid",CardColor:"primary" },
    
    ];

    return (
        <>
            <Modal className="modal fade w-100 ps--scrolling-y" id="exampleModal1" show={inviteModal} onHide={setInviteModal} centered>
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel1">{props.Title}</h1>
                        <button type="button" className="btn-close" onClick={() => setInviteModal(false)}></button>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12">

                                <div className="card">

                                    <div className="card-body">
                                        <div
                                            style={{ height: "550px" }}
                                            id="DZ_W_TimeLine"
                                            className="widget-timeline dz-scroll height370 ps--active-y"
                                        >
                                            <ul className="timeline">


                                                {ShowModelDate.map((item, indx) => (

                                                        <li>
                                                        <div className={`timeline-badge ${item.CardColor}`}></div>
                                                            <div
                                                                className="timeline-panel "
                                                            >
                                                            <h4 className=''>
                                                            {item.maintitle}
                                                                </h4>
                                                                <h6 className="mb-0 ">
                                                                {item.subtitle}
                                                                </h6>
                                                            </div>



                                                        </li>
                                                       
                                                  
                                                ))}
                                                
                                            </ul>
                                        </div>
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
export default BookingShowModel;
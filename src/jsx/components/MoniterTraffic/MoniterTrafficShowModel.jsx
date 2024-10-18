import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal } from 'react-bootstrap';




const MoniterTrafficShowModel = forwardRef((props, ref) => {
    //states
    const [inviteModal, setInviteModal] = useState(false);
    const [isloading, setisloading] = useState(false)


    //functions
    useImperativeHandle(ref, () => ({
        showInviteModal() {
            setInviteModal(true)
        }
    }));

    
    const ShowModelDate = [
        { subtitle: props.viweModelData.BookingID,maintitle:"Booking ID",CardColor:"primary" },
        { subtitle: props.viweModelData.TypeID,maintitle:"Type ID" ,CardColor:"success" },
        { subtitle: props.viweModelData.financialvalue,maintitle:"Financial Value" ,CardColor:"primary" },
        { subtitle: props.viweModelData.CreatedOn,maintitle: "Created On",CardColor:"success" },
        { subtitle: props.viweModelData.UserName,maintitle:"User Name" ,CardColor:"primary" },
        { subtitle: props.viweModelData.PhoneNumber,maintitle:"Phone Number" ,CardColor:"success" },
        { subtitle: props.viweModelData.PropertyOwnerAccount,maintitle:"Property Owner Account" ,CardColor:"primary" },
        { subtitle: props.viweModelData.Payment,maintitle:"Payment" ,CardColor:"success" },
        { subtitle: props.viweModelData.note,maintitle:"Note" ,CardColor:"primary" },
        
    
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
export default MoniterTrafficShowModel;
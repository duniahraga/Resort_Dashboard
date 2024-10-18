import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal } from 'react-bootstrap';




const ChaletShowModel = forwardRef((props, ref) => {
    //states
    const [inviteModal, setInviteModal] = useState(false);
    const [isloading, setisloading] = useState(false)

    console.log(props)

    //functions
    useImperativeHandle(ref, () => ({
        showInviteModal() {
            setInviteModal(true)
        }
    }));

    let facilitie = "";
    if (props.viweModelData.facility && props.viweModelData.facility.length > 0) {
      const facilities = props.viweModelData.facility.map(facility => facility.facility);
      facilitie = facilities.join(", ");
    }

    let amenities = "";
    if (props.viweModelData.amenity && props.viweModelData.amenity.length > 0) {
      const amenity = props.viweModelData.amenity.map(amenity => amenity.amenity);
      amenities = amenity.join(", ");
    }
    const ShowModelDate = [
        { subtitle: props.viweModelData.Title,maintitle:"Title",CardColor:"primary" },
        { subtitle: props.viweModelData.paymentmethod,maintitle:"Payment method" ,CardColor:"success" },
        { subtitle: props.viweModelData.WeekDayPrice,maintitle:"Week Day Price" ,CardColor:"primary" },
        { subtitle: props.viweModelData.WeekendDayPrice,maintitle: "Weekend Day Price",CardColor:"success" },
        { subtitle: props.viweModelData.DepositweekDayPrice,maintitle:"Deposit Week Day Price" ,CardColor:"primary" },
        { subtitle: props.viweModelData.NoOfGuest,maintitle:"Number Of Guest" ,CardColor:"success" },
        { subtitle: props.viweModelData.NoOfadults,maintitle:"Number Of Adults" ,CardColor:"primary" },
        { subtitle: props.viweModelData.NoOfchildren,maintitle:"Number Of Children" ,CardColor:"success" },
        { subtitle: props.viweModelData.Numberofsimilarchalets,maintitle:"Number Of Similar Chalets" ,CardColor:"primary" },
        { subtitle: props.viweModelData.Chaletsize,maintitle:"Chalet Size" ,CardColor:"success" },
        { subtitle: props.viweModelData.Publish,maintitle:"Publish" ,CardColor:"primary" },
        { subtitle: props.viweModelData.dateNotAva,maintitle: "Date Not a avalible",CardColor:"success" },
        { subtitle: facilitie,maintitle:"Facility" ,CardColor:"primary" },
        { subtitle: amenities,maintitle:"Amenity" ,CardColor:"success" },
        { subtitle: props.viweModelData.Description,maintitle:"Description",CardColor:"primary" },
        { subtitle: props.viweModelData.ImageFile, maintitle: "Images", CardColor: "success" },
        { subtitle: props.viweModelData.Guesttype,maintitle:"Guest Type",CardColor:"primary" },
        { subtitle: props.viweModelData.TypeofAccommodation,maintitle: "Typ Of Accommodation",CardColor:"success" },
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
export default ChaletShowModel;
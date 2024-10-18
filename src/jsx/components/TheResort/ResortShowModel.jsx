import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal } from 'react-bootstrap';




const ResortShowModel = forwardRef((props, ref) => {
    //states
    const [inviteModal, setInviteModal] = useState(false);
    const [isloading, setisloading] = useState(false)


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
        { subtitle: props.viweModelData.Cities,maintitle:"Cities" ,CardColor:"success" },
        { subtitle: props.viweModelData.Zones,maintitle:"Zones" ,CardColor:"primary" },
        { subtitle: props.viweModelData.NearSea,maintitle: "Near Sea",CardColor:"success" },
        { subtitle: props.viweModelData.Publish,maintitle:"Publish" ,CardColor:"primary" },
        { subtitle: props.viweModelData.CheckInTime,maintitle:"CheckIn Time" ,CardColor:"success" },
        { subtitle: props.viweModelData.CheckOutTime,maintitle:"CheckOutTime" ,CardColor:"primary" },
        { subtitle: props.viweModelData.Advancedinformation,maintitle:"Advanced Information" ,CardColor:"success" },
        { subtitle: props.viweModelData.longitude,maintitle:"longitude" ,CardColor:"primary" },
        { subtitle: props.viweModelData.latitude,maintitle:"latitude" ,CardColor:"success" },
        { subtitle: props.viweModelData.Seizurelaw,maintitle:"Seizure law" ,CardColor:"primary" },
        { subtitle: props.viweModelData.Abolitionlaw,maintitle: "Abolition law",CardColor:"success" },
        { subtitle: facilitie,maintitle:"Facility" ,CardColor:"primary" },
        { subtitle: amenities,maintitle:"Amenity" ,CardColor:"success" },
        { subtitle: props.viweModelData.Description,maintitle:"Description",CardColor:"primary" },
        { subtitle: props.viweModelData.status,maintitle: "Status",CardColor:"success" },
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
export default ResortShowModel;
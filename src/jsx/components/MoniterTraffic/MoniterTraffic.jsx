import React, { useState, useRef, useEffect, useCallback } from "react";
import Tables from "../Tables/Tables";
import MoniterTrafficShowModel from "./MoniterTrafficShowModel";
import axios from "axios";

export default function MoniterTraffic() {
    const [tableData, setTableData] = useState([]); // State to hold table data
    const [startDate, setStartDate] = useState(""); // State for start date
    const [endDate, setEndDate] = useState(""); // State for end date
    const [filteredData, setFilteredData] = useState([]); // State to hold filtered data
    const [APIdata, setAPIdata] = useState([])
    const invite = useRef();
    const [viweModelData, setviweModelData] = useState([])

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8082/MoniterTraffic");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();

                // Map the data to the desired format
                const formattedData = data.map((item) => ({
                    id: item.id,
                    BookingID: item.BookingID,
                    TypeID: item.TypeID,
                    financialvalue: item.financialvalue,
                    CreatedOn: item.CreatedOn,
                    UserName: item.UserName,
                    PhoneNumber: item.PhoneNumber,
                    PropertyOwnerAccount: item.PropertyOwnerAccount,
                    Payment: item.Payment,
                    note: item.note,
                }));

                setTableData(formattedData); // Set the formatted data to state
                setFilteredData(formattedData); // Initially set filtered data to all data
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); // Call the fetch function
    }, []); // Empty dependency array means this runs once on mount
    
    // Filter the table data based on the date range
    const filterData = useCallback(() => {
        if (!startDate && !endDate) {
            return tableData; // Return all data if no dates are set
        }

        return tableData.filter((item) => {
            const entryDate = new Date(item.EntryDate);
            const exitDate = new Date(item.ExitDate);
            const start = startDate ? new Date(startDate) : null;
            const end = endDate ? new Date(endDate) : null;

            if (start && end) {
                return entryDate >= start && exitDate <= end;
            } else if (start) {
                return entryDate >= start;
            } else if (end) {
                return exitDate <= end;
            }
            return true;
        });
    }, [tableData, startDate, endDate]);

    useEffect(() => {
        setFilteredData(filterData());
    }, [filterData]);

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    

    const headersTitle = [
        { label: ' ID', key: 'id' },
        { label: 'Booking ID', key: 'BookingID' },
        { label: 'Type ID', key: 'TypeID' },
        { label: 'the financial value', key:'financialvalue' },
        { label: 'Created On', key: 'CreatedOn' },
        { label: 'User Name', key: 'UserName' },
        { label: 'Phone Number', key: 'PhoneNumber' },
        { label: 'Property Owner Account', key: 'PropertyOwnerAccount' },
        { label: 'Payment', key: 'Payment' },
        { label: 'Note', key: 'note' },
    ]

    // ==================================viweModel=================================

    function ViweModel(id) {
        invite.current.showInviteModal()
        APIdata.map((item) => {
            if (id === item.id) {
                setviweModelData(item)
            }


        })

    }

    return (
        <>
            <Tables
                data={filteredData}
                headers={headersTitle}
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={handleStartDateChange}
                onEndDateChange={handleEndDateChange}
                ViweModel={ViweModel}
            />


            <MoniterTrafficShowModel
             ref={invite}
             viweModelData={viweModelData}
             Title="Show Moiter Traffics"
            
            />
        </>
    );
}
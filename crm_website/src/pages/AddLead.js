import React, { useState } from "react";
import axios from "axios";
import "./AddLead.css";
import Form from "../components/Form";
// import HeadBar from "./components/headbar";
import Topbar from "../components/Topbar";
import LeftBar from "../components/LeftBar";
import TitleBar from "../components/Titlebar";

export default function AddLead() {
  const [salutation, setSalutation] = useState("");
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [leadSourceName, setLeadSourceName] = useState("");
  const [dateAddedOn, setDateAddedOn] = useState("");
  const [activeStatus, setActiveStatus] = useState("");
  const [leadOwner, setLeadOwner] = useState();
  const [esuffix, setEsuffix] = useState("");
  const [errorfirstname, setEfirstname] = useState("");
  const [errorlastname, setElastname] = useState("");
  const [errorcompany, setEcompany] = useState("");
  const [erroremail, setEemail] = useState("");
  const [errorphone, setEphone] = useState("");
  const [erroraddress, setEaddress] = useState("");
  const [errorcreatedon, setEcreatedon] = useState("");
  const [errorcreatedby, setEcreatedby] = useState("");
  const [addlead, setAddlead] = useState("");
  const [bulkimportshow, setBulkimportshow] = useState(false);
  const [savebuttonshow, setSavebuttonshow] = useState(true);
  const [middledivshow, setMiddledivshow] = useState(false);
  const button_value = "Save lead";
  const titlebar_name = "Lead List";
  const titlebar_value1 = "active";
  const titlebar_value2 = "draft";
  const titlebar_value3 = "all";
  const form_head = "Lead Details";


  const addleadshow = true;
  const div_head1 = "Salutation";
  const div_head2 = "FirstName";
  const div_head3 = "MiddleName";
  const div_head4 = "LastName";
  const div_head5 = "Title";
  const div_head6 = "Comapany";
  const div_head7 = "Email";
  const div_head8 = "Phone";
  const div_head9 = "Mobile";
  const div_head10 = "Address";
  const div_head11 = "City";
  const div_head12 = "State";
  const div_head13 = "Pin code";
  const div_head14 = "Lead Source Name";
  const div_head15 = "Date Added On";
  const div_head16 = "Active Status";
  const div_head17 = "Lead Owner";

    /* <Form form_head={form_head} div_head1={div_head1} div_value1={salutation} setDiv_value1={setSalutation}
    div_head2={div_head2} div_value2={firstname} setDiv_value2={setFirstname}
    div_head3={div_head3} div_value3={middlename} setDiv_value3={setMiddlename}
    div_head4={div_head4} div_value4={lastname} setDiv_value={setLastname}
    div_head5={div_head5} div_value5={title} setDiv_value5={setTitle}
    div_head6={div_head6} div_value6={company} setDiv_value6={setCompany}
    div_head7={div_head7} div_value7={email} setDiv_value7={setEmail}
    div_head8={div_head8} div_value8={phone} setDiv_value8={setPhone}
    div_head9={div_head9} div_value9={mobile} setDiv_value9={setMobile}
    div_head10={div_head10} div_value10={address} setDiv_value10={setAddress}
    div_head11={div_head11} div_value11={city} setDiv_value11={setCity}
    div_head12={div_head12} div_value12={state} setDiv_value12={setState}
    div_head13={div_head13} div_value13={pincode} setDiv_value13={setPincode}
    div_head14={div_head14} div_value14={leadSourceName} setDiv_value14={setLeadSourceName}
    div_head15={div_head15} div_value15={dateAddedOn} setDiv_value15={setDateAddedOn}
    div_head16={div_head16} div_value16={activeStatus} setDiv_value16={setActiveStatus}
    div_head17={div_head17} div_value17={leadOwner} setDiv_value17={setLeadOwner} 
    ediv_value1={esuffix} ediv_value2={errorfirstname} ediv_value3={errorlastname} ediv_value4={errorcompany} ediv_value5={erroremail} ediv_value6={errorphone} ediv_value7={erroraddress} ediv_value8={errorcreatedon} ediv_value9={errorcreatedby}
    
    /> */

  let SaveLead = () => {
    const suffix = localStorage.getItem("salutationvar");
    const firstname = localStorage.getItem("firstnamevar");
    const lastname = localStorage.getItem("lastnamevar");
    const company = localStorage.getItem("companyvar");
    const phone = localStorage.getItem("phonevar");
    const email = localStorage.getItem("emailvar");
    const address = localStorage.getItem("statevar");
    const createdOn = localStorage.getItem("dateAddedOnvar");
    const createdBy = localStorage.getItem("leadOwnervar");

    console.log(
      suffix,
      firstname,
      lastname,
      company,
      phone,
      email,
      address,
      createdBy,
      createdOn
    );

    if (suffix === "") {
      setEsuffix("*suffix is mandatory");
      setEfirstname("*firstname is mandatory");
      setElastname("*lastname is mandatory");
      setEcompany("*company is mandatory");
      setEemail("*email is mandatory");
      setEphone("*phone is mandatory");
      setEaddress("*address is mandatory");
      setEcreatedon("*created on is mandatory");
      setEcreatedby("*leads owner is mandatory");
      // localStorage.setItem('esuffixvar', errorsuffix)
    } else if (firstname === "") {
      setEsuffix("");
      setEfirstname("*firstname is mandatory");
      setElastname("*lastname is mandatory");
      setEcompany("*company is mandatory");
      setEemail("*email is mandatory");
      setEphone("*phone is mandatory");
      setEaddress("*address is mandatory");
      setEcreatedon("*created on is mandatory");
      setEcreatedby("*leads owner is mandatory");
      setEfirstname("*firstname is mandatory");
      // localStorage.setItem('efirstnamevar', errorfirstname)
    } else if (lastname === "") {
      setEsuffix("");
      setEfirstname("");
      setElastname("*lastname is mandatory");
      setEcompany("*company is mandatory");
      setEemail("*email is mandatory");
      setEphone("*phone is mandatory");
      setEaddress("*address is mandatory");
      setEcreatedon("*created on is mandatory");
      setEcreatedby("*leads owner is mandatory");
      // localStorage.setItem('elastnamevar', errorlastname)
    } else if (company === "") {
      setEsuffix("");
      setEfirstname("");
      setElastname("");
      setEcompany("*company is mandatory");
      setEemail("*email is mandatory");
      setEphone("*phone is mandatory");
      setEaddress("*address is mandatory");
      setEcreatedon("*created on is mandatory");
      setEcreatedby("*leads owner is mandatory");
      // localStorage.setItem('ecompanyvar', errorcompany)
    } else if (email === "") {
      setEsuffix("");
      setEfirstname("");
      setElastname("");
      setEcompany("");
      setEemail("*email is mandatory");
      setEphone("*phone is mandatory");
      setEaddress("*address is mandatory");
      setEcreatedon("*created on is mandatory");
      setEcreatedby("*leads owner is mandatory");
      // localStorage.setItem('eemailvar', erroremail)
    } else if (phone === undefined) {
      setEsuffix("");
      setEfirstname("");
      setElastname("");
      setEcompany("");
      setEemail("");
      setEphone("*phone is mandatory");
      setEaddress("*address is mandatory");
      setEcreatedon("*created on is mandatory");
      setEcreatedby("*leads owner is mandatory");
      // localStorage.setItem('ephonevar', errorphone)
    } else if (address === "") {
      setEsuffix("");
      setEfirstname("");
      setElastname("");
      setEcompany("");
      setEemail("");
      setEphone("");
      setEaddress("*address is mandatory");
      setEcreatedon("*created on is mandatory");
      setEcreatedby("*leads owner is mandatory");
      // localStorage.setItem('eaddressvar', erroraddress)
    } else if (createdOn === "") {
      setEsuffix("");
      setEfirstname("");
      setElastname("");
      setEcompany("");
      setEemail("");
      setEphone("");
      setEaddress("");
      setEcreatedon("*created on is mandatory");
      setEcreatedby("*leads owner is mandatory");
      // localStorage.setItem('ecreatedonvar', errorcreatedon)
    } else if (createdBy === 0) {
      setEsuffix("");
      setEfirstname("");
      setElastname("");
      setEcompany("");
      setEemail("");
      setEphone("");
      setEaddress("");
      setEcreatedon("");
      setEcreatedby("*leads owner is mandatory");
      // localStorage.setItem('ecreatedbyvar', errorcreatedby)
    } else {
      const url = "http://localhost:3000/dev/InsertLead";
      // const url = "https://xegps3cqo7.execute-api.us-east-1.amazonaws.com/dev/InsertLead"
      const data = {
        suffix: suffix,
        firstname: firstname,
        lastname: lastname,
        company: company,
        phone: Number(phone),
        email: email,
        address: address,
        createdOn: createdOn,
        createdBy: Number(createdBy),
      };
      const header = {};
      axios
        .post(url, data, { headers: header })
        .then((res) => {
          if (res.data === "email id already exists") {
            setEsuffix("");
            setEfirstname("");
            setElastname("");
            setEcompany("");
            setEphone("");
            setEaddress("");
            setEcreatedon("");
            setEcreatedby("");
            setEemail("*email id already exist");
          } else {
            setAddlead("*lead has been added");
            setEsuffix("");
            setEfirstname("");
            setElastname("");
            setEcompany("");
            setEemail("");
            setEphone("");
            setEaddress("");
            setEcreatedon("");
            setEcreatedby("");
            console.log("response==> " + JSON.stringify(res.data));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <Topbar />
      <div className="AddLead_content">
        <LeftBar className="AddLead_LeftBar" />
        <div className="AddLead_content_right">
          <div className="AddLead_content_right_inside">
            {/* <TitleBar setEsuffix = {setEsuffix} setEfirstname = {setEfirstname}  setElastname={setElastname} setEcompany={setEcompany} setEphone={setEphone} setEemail={setEemail} setEaddress={setEaddress} setEcreatedon={setEcreatedon} setEcreatedby={setEcreatedby} /> */}
            <div className="addlead_titlebar_component">
              <TitleBar
                SaveLead={SaveLead}
                button_value={button_value}
                bulkimportshow={bulkimportshow}
                titlebar_name={titlebar_name}
                savebuttonshow={savebuttonshow}
                middledivshow={middledivshow}
                titlebar_value1={titlebar_value1}
                titlebar_value2={titlebar_value2}
                titlebar_value3={titlebar_value3}
              />
            </div>
            <div className="AddLead_content_right_inside_form">
              <label className="addlead_text">{addlead}</label>
              {/* <Form esuffix={esuffix} efirstname={errorfirstname} elastname={errorlastname} ecompany={errorcompany} ephone={errorphone} eemail={erroremail} eaddress={erroraddress} ecreatedon={errorcreatedon} ecreatedby={errorcreatedby} addlead={addlead} /> */}
              <Form
                form_head={form_head}
                addleadshow={addleadshow}
                div_head1={div_head1}
                div_value1={salutation}
                setDiv_value1={setSalutation}
                div_head2={div_head2}
                div_value2={firstname}
                setDiv_value2={setFirstname}
                div_head3={div_head3}
                div_value3={middlename}
                setDiv_value3={setMiddlename}
                div_head4={div_head4}
                div_value4={lastname}
                setDiv_value={setLastname}
                div_head5={div_head5}
                div_value5={title}
                setDiv_value5={setTitle}
                div_head6={div_head6}
                div_value6={company}
                setDiv_value6={setCompany}
                div_head7={div_head7}
                div_value7={email}
                setDiv_value7={setEmail}
                div_head8={div_head8}
                div_value8={phone}
                setDiv_value8={setPhone}
                div_head9={div_head9}
                div_value9={mobile}
                setDiv_value9={setMobile}
                div_head10={div_head10}
                div_value10={address}
                setDiv_value10={setAddress}
                div_head11={div_head11}
                div_value11={city}
                setDiv_value11={setCity}
                div_head12={div_head12}
                div_value12={state}
                setDiv_value12={setState}
                div_head13={div_head13}
                div_value13={pincode}
                setDiv_value13={setPincode}
                div_head14={div_head14}
                div_value14={leadSourceName}
                setDiv_value14={setLeadSourceName}
                div_head15={div_head15}
                div_value15={dateAddedOn}
                setDiv_value15={setDateAddedOn}
                div_head16={div_head16}
                div_value16={activeStatus}
                setDiv_value16={setActiveStatus}
                div_head17={div_head17}
                div_value17={leadOwner}
                setDiv_value17={setLeadOwner}
                ediv_value1={esuffix}
                ediv_value2={errorfirstname}
                ediv_value3={errorlastname}
                ediv_value4={errorcompany}
                ediv_value5={erroremail}
                ediv_value6={errorphone}
                ediv_value7={erroraddress}
                ediv_value8={errorcreatedon}
                ediv_value9={errorcreatedby}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

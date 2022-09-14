import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import {withCookies} from 'react-cookie';
import jwt_decode from 'jwt-decode';

import './App.css';
//Home
import Navbar from './components/includes/Navbar';
import HomePage from './components/pages/HomePage';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Footer from './components/includes/Footer';
import Notifications from './components/pages/Notifications';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import OTP from './components/pages/otp';

import PetToolStoreHome from './components/Actors/petstore/pages/PetToolStoreHome';



import AdminHeader from './components/Actors/Admin/pages/AdminHeader';
import AdminHome from './components/Actors/Admin/pages/AdminHome';
import AdminCreate from './components/Actors/Admin/pages/AdminCreate';
import AdminDelete from './components/Actors/Admin/pages/AdminDelete';
import AdminUpdate from './components/Actors/Admin/pages/AdminUpdate';
import AdminView from './components/Actors/Admin/pages/AdminView';
import ViewComplains from './components/Actors/Admin/pages/ViewComplains';



//customer
import CustomerFindpet from './components/Actors/customer/pages/CustomerFindpet';
import CustomerDoctorappoint from './components/Actors/customer/pages/CustomerDoctorappoint';
import CustomerPharmacy from './components/Actors/customer/pages/CustomerPharmacy';
import CustomerPettoolstore from './components/Actors/customer/pages/CustomerPettoolstore';
import ProfilePage from './components/Actors/customer/pages/ProfilePage';
import CustomerAdoptRequest from './components/Actors/customer/pages/CustomerAdoptRequest';
import CustomerEditProfile from './components/Actors/customer/pages/CustomerEditProfile';
import CustomerChangePassword from './components/Actors/customer/pages/CustomerChangePassword';
import CustomerDoctormessages from './components/Actors/customer/pages/CustomerDoctormessages';
import Customerpharmacypage from './components/Actors/customer/pages/Customerpharmacypage';
import Customerpettoolstorepage from './components/Actors/customer/pages/Customerpettoolstorepage';
import Customerviewpetdetails from './components/Actors/customer/pages/Customerviewpetdetails';
import CustomerRequestappoint from './components/Actors/customer/pages/CustomerRequestappoint';
import DoctorCalender from './components/Actors/customer/pages/DoctorCalender';
import CustomerBuymedicine from './components/Actors/customer/pages/CustomerBuymedicine';
import CustomerBuypettool from './components/Actors/customer/pages/CustomerBuypettool';



// Pet Tool Store
import AddEquipmentStock from './components/Actors/petstore/inventory/AddEquipmentStock';
import PaidOrders from './components/Actors/petstore/pages/PaidOrders';
import ViewPetToolInventory from './components/Actors/petstore/inventory/ViewPetToolInventory';
import PostAdvertisement from './components/Actors/petstore/pages/PostAdvertisement';
import EditAdvertisement from './components/Actors/petstore/pages/EditAdvertisement';
import MoreDetails from './components/Actors/petstore/pages/MoreDetails';
import ViewInventryInquiry from './components/Actors/petstore/inquiries/ViewInquiry';





// function App() {
class App extends Component{

 render(){
  let sessionToken = sessionStorage.getItem("token");
  console.log("Appjs",sessionToken);
  

  return (

 //Homepage
  <Router>

      <div>
        {/* <Navbar/> */}

        <Routes>
      
            <Route exact path='/' element={<HomePage/>} />    
            <Route exact path='/about' element={<AboutUs/>} />  
            <Route exact path='/contact' element={<ContactUs/>} /> 
            <Route exact path='/Notifications' element={<Notifications/>} /> 
            <Route exact path='/PetToolStore' element={<PetToolStoreHome/>} />
            <Route exact path='/OTPverify' element={<OTP/>} />

            <Route exact path='/SignUp' element={<SignUp />} />
            <Route exact path='/SignIn' element={<SignIn />} />
            
            

            <Route exact path='/AdminHome/Create' element={<AdminCreate />} /> 
            <Route exact path='/AdminHome/Delete' element={<AdminDelete />} />
            <Route exact path='/AdminHome/Update' element={<AdminUpdate />} />
            <Route exact path='/AdminHome/View' element={<AdminView />} />
            <Route exact path='/AdminHome' element={<AdminHome />} />  
            <Route exact path='/AdminHome/complains' element={<ViewComplains />} />


            {/* Pet Tool Store */}
            <Route exact path='/petstore/inventory/AddEquipmentStock' element={<AddEquipmentStock/>} />
            <Route exact path='/petstore/inventory/ViewPetToolInventory' element={<ViewPetToolInventory />} />
            <Route exact path='/petstore/addNewEquipment' element={<PostAdvertisement />} />
            <Route exact path='/petstore/EditAdvertisement' element={<EditAdvertisement />} />
            <Route exact path='/petstore/advertisement/MoreDetails' element={<MoreDetails />} />
            <Route exact path='/petstore/inquiries/ViewInquiry' element={<ViewInventryInquiry />} />
            <Route exact path='/petstore/PaidOrders' element={<PaidOrders />} />
            
            
              {/*Customer */}
              <Route exact path='/petadopter/findpharmacy/pharmacystore' element={<Customerpharmacypage/>} />
              <Route exact path='/petadopter/findpettoolstore/petstore' element={<Customerpettoolstorepage/>} />
              <Route exact path='/petadopter/messages' element={<CustomerDoctormessages/>}/>
              <Route exact path='/petadopter' element ={<CustomerFindpet/>} />
              <Route exact path='/petadopter/channeldoctor' element={<CustomerDoctorappoint/>}/> 
              <Route exact path='/petadopter/findpharmacy' element ={<CustomerPharmacy/>}/>
              <Route exact path='/petadopter/findpettoolstore' element ={<CustomerPettoolstore/>}/>
              <Route exact path='/petadopter/myprofile' element={<ProfilePage/>}/>
              <Route exact path='/petadopter/viewpetdetails/adoptrequestform' element={<CustomerAdoptRequest/>}/>
              <Route exact path="/petadopter/viewpetdetails" element ={<Customerviewpetdetails />}/>
              <Route exact path='/petadopter/channeldoctor/requestappoint' element={<CustomerRequestappoint/>}/>
              <Route exact path='/petadopter/channeldoctor/requestappoint/calender' element={<DoctorCalender/>}/>
              <Route exact path='/petadopter/findpharmacy/pharmacystore/medicinedetails' element={<CustomerBuymedicine/>}/>
              <Route exact path='/petadopter/findpettoolstore/petstore/pettooldetails' element={<CustomerBuypettool/>}/>


           
        
        </Routes>

        <Footer/>
        
      </div>
  </Router>

  )
 }
}
// export withCookies(App);
export default withCookies(App)

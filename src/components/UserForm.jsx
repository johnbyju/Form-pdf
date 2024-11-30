// import { useDispatch, useSelector } from "react-redux";
// import { updateField } from "../redux/formSlice";

// function UserForm({ onSubmit }) {
//   const dispatch = useDispatch();
//   const formData = useSelector((state) => state.form);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     dispatch(updateField({ field: name, value }));
//   };

//   const handleFileChange = (e) => {
//     dispatch(updateField({ field: "photo", value: e.target.files[0] }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(); // This will switch to the preview mode
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//         <input
//           type="text"
//           name="fullName"
//           placeholder="Full Name"
//           value={formData.fullName}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//         />
//         <input
//           type="date"
//           name="dob"
//           value={formData.dob}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//         />
//       </div>

//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//         <input
//           type="tel"
//           name="contactNumber"
//           placeholder="Contact Number"
//           value={formData.contactNumber}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="E-mail Address"
//           value={formData.email}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//         />
//       </div>

//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//         <input
//           type="file"
//           name="photo"
//           onChange={handleFileChange}
//           className="p-2 border rounded-md w-full"
//         />
//         <input
//           type="text"
//           name="preferredRole"
//           placeholder="Preferred Role"
//           value={formData.preferredRole}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//         />
//       </div>

//       <div className="grid grid-cols-1 gap-4">
//         <textarea
//           name="playerInfo"
//           placeholder="Player Information"
//           value={formData.playerInfo}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//         />
//         <input
//           type="text"
//           name="bowlingType"
//           placeholder="Bowling Type"
//           value={formData.bowlingType}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//         />
//         <input
//           type="text"
//           name="specialSkills"
//           placeholder="Special Skills"
//           value={formData.specialSkills}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//         />
//         <input
//           type="text"
//           name="jerseySize"
//           placeholder="Jersey Size"
//           value={formData.jerseySize}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//         />
//         <textarea
//           name="medicalConditions"
//           placeholder="Any Medical Conditions"
//           value={formData.medicalConditions}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//         />
//         <input
//           type="text"
//           name="emergencyContactName"
//           placeholder="Emergency Contact Name"
//           value={formData.emergencyContactName}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//         />
//         <input
//           type="tel"
//           name="emergencyContactInfo"
//           placeholder="Emergency Contact Information"
//           value={formData.emergencyContactInfo}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//         />
//         <input
//           type="text"
//           name="favouriteCricketer"
//           placeholder="Favourite Cricketer"
//           value={formData.favouriteCricketer}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//         />
//         <textarea
//           name="acknowledgement"
//           placeholder="Acknowledgement"
//           value={formData.acknowledgement}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//         />
//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           className="p-2 border rounded-md w-full"
//         />
//       </div>

//       <button
//         type="submit"
//         className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//       >
//         Preview
//       </button>
//     </form>
//   );
// }

// export default UserForm;





import { useDispatch, useSelector } from "react-redux"
import { User, Mail, Phone, Calendar, Camera, Eye, } from 'lucide-react'
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";



export default function UserForm({ onSubmit }) {
  const dispatch = useDispatch()
  const formData = useSelector((state) => state.form)

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch({ type: 'form/updateField', payload: { field: name, value } })
  }

  const handleFileChange = (e) => {
    dispatch({ type: 'form/updateField', payload: { field: "photo", value: e.target.files[0] } })
  }

  const handleDateChange = (newValue) => {
    // Update the date field in Redux state
    dispatch({ type: 'form/updateField', payload: { field: 'date', value: newValue } })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <>

    
      <div className=" bg-black  text-white">
        <div
          className="max-w-md mx-auto space-y-8 relative z-0 flex-1"
        >
          <form onSubmit={handleSubmit} className="space-y-6 p-4">
            <div className="space-y-4">
              <div className="relative gap-2">
                <h3 className="pb-2">full name</h3>
                 <User className="absolute right-3 top-1/2 -translate-y-1/5 text-gray-400 " />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-black bg-opacity-60 border border-gray-800 rounded-lg py-2 pl-12 text-white placeholder:text-gray-400 focus:outline-none focus:border-red-600"
                />
              </div>

              <div className="relative">
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 z-3 text-white h-5 w-5" />
                  <DatePicker
                    value={formData.date ? dayjs(formData.date) : null}
                    onChange={handleDateChange}
                    className="w-full text-white placeholder:text-white"
                    format="Date of birth"
                  // renderInput={(params) => (
                  //   <input
                  //     {...params.inputProps}
                  //     className="w-full  bg-opacity-60 border border-gray-800 rounded-lg p-3 pl-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-red-600"
                  //     placeholder="Date of Birth"
                  //   />
                  // )}
                  />
                </LocalizationProvider>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full bg-black bg-opacity-60 border border-gray-800 rounded-lg p-3  text-white placeholder:text-gray-400 focus:outline-none focus:border-red-600"
                />
                <Phone className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>

              <div className="relative">

                <input
                  type="email"
                  name="email"
                  placeholder="E-mail Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black bg-opacity-60 border border-gray-800 rounded-lg p-3  text-white placeholder:text-gray-400 focus:outline-none focus:border-red-600"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="relative">

                <input
                  type="email"
                  name="email"
                  placeholder="E-mail Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black bg-opacity-60 border border-gray-800 rounded-lg p-3  text-white placeholder:text-gray-400 focus:outline-none focus:border-red-600"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="relative">

                <input
                  type="email"
                  name="email"
                  placeholder="E-mail Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black bg-opacity-60 border border-gray-800 rounded-lg p-3  text-white placeholder:text-gray-400 focus:outline-none focus:border-red-600"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="relative">

                <input
                  type="email"
                  name="email"
                  placeholder="E-mail Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black bg-opacity-60 border border-gray-800 rounded-lg p-3  text-white placeholder:text-gray-400 focus:outline-none focus:border-red-600"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="relative">

                <input
                  type="email"
                  name="email"
                  placeholder="E-mail Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black bg-opacity-60 border border-gray-800 rounded-lg p-3  text-white placeholder:text-gray-400 focus:outline-none focus:border-red-600"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="relative">

                <input
                  type="email"
                  name="email"
                  placeholder="E-mail Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black bg-opacity-60 border border-gray-800 rounded-lg p-3  text-white placeholder:text-gray-400 focus:outline-none focus:border-red-600"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="relative">

                <input
                  type="email"
                  name="email"
                  placeholder="E-mail Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black bg-opacity-60 border border-gray-800 rounded-lg p-3  text-white placeholder:text-gray-400 focus:outline-none focus:border-red-600"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="relative">

                <input
                  type="email"
                  name="email"
                  placeholder="E-mail Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black bg-opacity-60 border border-gray-800 rounded-lg p-3  text-white placeholder:text-gray-400 focus:outline-none focus:border-red-600"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="relative">

                <input
                  type="email"
                  name="email"
                  placeholder="E-mail Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black bg-opacity-60 border border-gray-800 rounded-lg p-3  text-white placeholder:text-gray-400 focus:outline-none focus:border-red-600"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="relative">

                <input
                  type="email"
                  name="email"
                  placeholder="E-mail Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black bg-opacity-60 border border-gray-800 rounded-lg p-3  text-white placeholder:text-gray-400 focus:outline-none focus:border-red-600"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="relative">

                <input
                  type="email"
                  name="email"
                  placeholder="E-mail Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black bg-opacity-60 border border-gray-800 rounded-lg p-3  text-white placeholder:text-gray-400 focus:outline-none focus:border-red-600"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="relative">

                <input
                  type="email"
                  name="email"
                  placeholder="E-mail Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black bg-opacity-60 border border-gray-800 rounded-lg p-3  text-white placeholder:text-gray-400 focus:outline-none focus:border-red-600"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="relative">

                <input
                  type="email"
                  name="email"
                  placeholder="E-mail Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black bg-opacity-60 border border-gray-800 rounded-lg p-3  text-white placeholder:text-gray-400 focus:outline-none focus:border-red-600"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>

              {/* <div className="relative">
              <Camera className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="file"
                name="photo"
                onChange={handleFileChange}
                className="w-full bg-black bg-opacity-60 border border-gray-800 rounded-lg p-3  text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-600 file:text-white hover:file:bg-red-700 focus:outline-none focus:border-red-600"
              />
            </div> */}
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white rounded-lg p-3 font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              <Eye className="h-5 w-5" />
              Preview
            </button>
          </form>
        </div>
      </div>
    </>
  )
}





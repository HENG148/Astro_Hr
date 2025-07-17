const CVButton = () => {
  // const {data: seasion, status} = useSess
}

export default CVButton

// 'use client'

// import { useAuth } from "@/contexts/AuthContext"
// import { useState } from "react";
// import RegistrationForm from "./RegistrationForm";
// import CVForm from "./CVForm";

// const CVButton = () => {
//   const { isAuthenticated, isLoading } = useAuth();
//   const [showCVForm, setShowCVForm] = useState(false);
//   const [showRegisterForm, setShowRegisterForm] = useState(false);

//   const handleCreateCV = () => {
//     if (isLoading) return;
//     if (isAuthenticated) {
//       setShowCVForm(true)
//     } else {
//       setShowRegisterForm(true)
//     }
//   };

//   const handleRegistrationSuccess = () => {
//     setShowRegisterForm(false)
//     setShowCVForm(true);
//   }

//   return (
//     <div>
//       <button
//         onClick={handleCreateCV}
//         className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Create Professional CV
//       </button>
//       {showRegisterForm && (
//         <RegistrationForm
//           onSuccess={handleRegistrationSuccess}
//           onClose={() => setShowRegisterForm(false)}
//         />
//       )}

//       {showCVForm && (
//         <CVForm 
//           onClose={() => setShowCVForm(false)}
//         />
//       )}
//     </div>
//   )
// }

// export default CVButton;
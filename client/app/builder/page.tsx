// // app/builder/page.tsx
// 'use client'; // Use Client component since we're handling state

// import { useState } from 'react';
// import ResumeForm from '../../components/ResumeForm';
// import ResumePreview from '../../components/ResumePreview';

// export default function ResumeBuilder() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     summary: '',
//     skills: '',
//     experience: '',
//   });

//   const handleFormChange = (updatedForm: any) => {
//     setFormData(updatedForm);
//   };

//   return (
//     <div className="flex">
//       {/* Left: Resume Form */}
//       <div className="w-1/2 p-8">
//         <ResumeForm formData={formData} onChange={handleFormChange} />
//       </div>

//       {/* Right: Resume Preview */}
//       <div className="w-1/2 p-8 bg-gray-100">
//         <ResumePreview formData={formData} />
//       </div>
//     </div>
//   );
// }

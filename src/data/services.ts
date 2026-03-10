import bbmpHomepage from "@/assets/steps/bbmp-homepage.jpg";
import registrationForm from "@/assets/steps/registration-form.jpg";
import loginPage from "@/assets/steps/login-page.jpg";
import applicationForm from "@/assets/steps/application-form.jpg";
import trackStatus from "@/assets/steps/track-status.jpg";
import downloadPage from "@/assets/steps/download-page.jpg";

export interface Step {
  title: { en: string; kn: string };
  instruction: { en: string; kn: string };
  image: string;
  highlightArea?: { top: string; left: string; width: string; height: string };
}

export interface Service {
  id: string;
  title: { en: string; kn: string };
  description: { en: string; kn: string };
  icon: string;
  directLink: string;
  steps: Step[];
}

export const services: Service[] = [
  {
    id: "apply-ekhata",
    title: { en: "Apply for e-Khata", kn: "ಇ-ಖಾತಾ ಅರ್ಜಿ" },
    description: { en: "Apply for new digital Khata certificate", kn: "ಹೊಸ ಡಿಜಿಟಲ್ ಖಾತಾ ಪ್ರಮಾಣಪತ್ರಕ್ಕಾಗಿ ಅರ್ಜಿ" },
    icon: "📝",
    directLink: "https://bbmpeaasthi.karnataka.gov.in/",
    steps: [
      {
        title: { en: "Step 1: Find 'Apply for e-Khata' on the Homepage", kn: "ಹಂತ 1: ಮುಖಪುಟದಲ್ಲಿ 'Apply for e-Khata' ಹುಡುಕಿ" },
        instruction: {
          en: "Open 'bbmpeaasthi.karnataka.gov.in' in your browser. On the homepage, look for the 'Apply for e-Khata' option in the Citizen Services section (highlighted below). Click on it to begin your application.",
          kn: "ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ 'bbmpeaasthi.karnataka.gov.in' ತೆರೆಯಿರಿ. ಮುಖಪುಟದಲ್ಲಿ ನಾಗರಿಕ ಸೇವೆಗಳ ವಿಭಾಗದಲ್ಲಿ 'Apply for e-Khata' ಆಯ್ಕೆಯನ್ನು ಹುಡುಕಿ (ಕೆಳಗೆ ಗುರುತಿಸಲಾಗಿದೆ). ಅದನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ."
        },
        image: bbmpHomepage,
        highlightArea: { top: "30%", left: "5%", width: "28%", height: "6%" },
      },
      {
        title: { en: "Step 2: Register on the Portal", kn: "ಹಂತ 2: ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ನೋಂದಣಿ ಮಾಡಿ" },
        instruction: {
          en: "Click 'Register' or 'New User? Sign Up' on the homepage. Fill in your Name, Aadhaar Number, Phone Number, and Email Address. Click the 'Register' button. You will receive an OTP on your phone.",
          kn: "ಮುಖಪುಟದಲ್ಲಿ 'Register' ಅಥವಾ 'New User? Sign Up' ಕ್ಲಿಕ್ ಮಾಡಿ. ನಿಮ್ಮ ಹೆಸರು, ಆಧಾರ್ ಸಂಖ್ಯೆ, ಫೋನ್ ಸಂಖ್ಯೆ, ಮತ್ತು ಇಮೇಲ್ ವಿಳಾಸ ಭರ್ತಿ ಮಾಡಿ. 'Register' ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ."
        },
        image: registrationForm,
        highlightArea: { top: "75%", left: "35%", width: "30%", height: "8%" },
      },
      {
        title: { en: "Step 3: Login to Your Account", kn: "ಹಂತ 3: ನಿಮ್ಮ ಖಾತೆಗೆ ಲಾಗಿನ್ ಆಗಿ" },
        instruction: {
          en: "After registration, go back to the homepage. Enter your Username and Password. Enter the Captcha code shown on screen. Click the 'Login' button.",
          kn: "ನೋಂದಣಿಯ ನಂತರ, ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ. ನಿಮ್ಮ ಬಳಕೆದಾರ ಹೆಸರು ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ. ಪರದೆಯಲ್ಲಿ ತೋರಿಸಿರುವ ಕ್ಯಾಪ್ಚಾ ಕೋಡ್ ನಮೂದಿಸಿ. 'Login' ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ."
        },
        image: loginPage,
        highlightArea: { top: "65%", left: "25%", width: "50%", height: "8%" },
      },
      {
        title: { en: "Step 4: Fill the e-Khata Application Form", kn: "ಹಂತ 4: ಇ-ಖಾತಾ ಅರ್ಜಿ ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡಿ" },
        instruction: {
          en: "After login, click 'Apply for e-Khata' in the menu. Fill in your Property ID, Survey Number, Ward, Zone, Owner Name, and Property Address. Upload required documents (Sale Deed, Tax Receipt). Click 'Submit Application'.",
          kn: "ಲಾಗಿನ್ ಆದ ನಂತರ, ಮೆನುವಿನಲ್ಲಿ 'Apply for e-Khata' ಕ್ಲಿಕ್ ಮಾಡಿ. ನಿಮ್ಮ ಆಸ್ತಿ ID, ಸರ್ವೆ ಸಂಖ್ಯೆ, ವಾರ್ಡ್, ಝೋನ್, ಮಾಲೀಕರ ಹೆಸರು, ಮತ್ತು ಆಸ್ತಿ ವಿಳಾಸ ಭರ್ತಿ ಮಾಡಿ. ಅಗತ್ಯ ದಾಖಲೆಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ. 'Submit Application' ಕ್ಲಿಕ್ ಮಾಡಿ."
        },
        image: applicationForm,
        highlightArea: { top: "85%", left: "30%", width: "40%", height: "8%" },
      },
      {
        title: { en: "Step 5: Note Your ePID Number", kn: "ಹಂತ 5: ನಿಮ್ಮ ePID ಸಂಖ್ಯೆ ಬರೆದಿಟ್ಟುಕೊಳ್ಳಿ" },
        instruction: {
          en: "After submitting, you will see an ePID (Electronic Property ID) number on screen. IMPORTANT: Write this number down on paper! You need this number to check your application status later. Keep it safe.",
          kn: "ಅರ್ಜಿ ಸಲ್ಲಿಸಿದ ನಂತರ, ಪರದೆಯಲ್ಲಿ ePID (ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಆಸ್ತಿ ID) ಸಂಖ್ಯೆ ಕಾಣಿಸುತ್ತದೆ. ಮುಖ್ಯ: ಈ ಸಂಖ್ಯೆಯನ್ನು ಕಾಗದದಲ್ಲಿ ಬರೆದಿಟ್ಟುಕೊಳ್ಳಿ! ನಿಮ್ಮ ಅರ್ಜಿಯ ಸ್ಥಿತಿ ಪರಿಶೀಲಿಸಲು ಈ ಸಂಖ್ಯೆ ಬೇಕಾಗುತ್ತದೆ."
        },
        image: trackStatus,
      },
    ],
  },
  {
    id: "check-status",
    title: { en: "Check e-Khata Status", kn: "ಇ-ಖಾತಾ ಸ್ಥಿತಿ ಪರಿಶೀಲಿಸಿ" },
    description: { en: "Track your application using ePID number", kn: "ePID ಸಂಖ್ಯೆ ಬಳಸಿ ನಿಮ್ಮ ಅರ್ಜಿ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ" },
    icon: "🔍",
    directLink: "https://bbmpeaasthi.karnataka.gov.in/",
    steps: [
      {
        title: { en: "Step 1: Open the BBMP eAasthi Website", kn: "ಹಂತ 1: BBMP eAasthi ವೆಬ್‌ಸೈಟ್ ತೆರೆಯಿರಿ" },
        instruction: {
          en: "Open your browser and go to 'bbmpeaasthi.karnataka.gov.in'. Look for the 'Track Application' or 'Check Status' option on the homepage.",
          kn: "ನಿಮ್ಮ ಬ್ರೌಸರ್ ತೆರೆಯಿರಿ ಮತ್ತು 'bbmpeaasthi.karnataka.gov.in' ಗೆ ಹೋಗಿ. ಮುಖಪುಟದಲ್ಲಿ 'Track Application' ಅಥವಾ 'Check Status' ಆಯ್ಕೆ ಹುಡುಕಿ."
        },
        image: bbmpHomepage,
      },
      {
        title: { en: "Step 2: Enter Your ePID Number", kn: "ಹಂತ 2: ನಿಮ್ಮ ePID ಸಂಖ್ಯೆ ನಮೂದಿಸಿ" },
        instruction: {
          en: "Click on 'Track Application Status'. Enter your ePID number in the search box. Click 'Track Status' button. Your application status will appear on screen showing whether it is under review, approved, or pending.",
          kn: "'Track Application Status' ಕ್ಲಿಕ್ ಮಾಡಿ. ಹುಡುಕಾಟ ಬಾಕ್ಸ್‌ನಲ್ಲಿ ನಿಮ್ಮ ePID ಸಂಖ್ಯೆ ನಮೂದಿಸಿ. 'Track Status' ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ."
        },
        image: trackStatus,
        highlightArea: { top: "15%", left: "8%", width: "60%", height: "12%" },
      },
    ],
  },
  {
    id: "download-ekhata",
    title: { en: "Download e-Khata", kn: "ಇ-ಖಾತಾ ಡೌನ್‌ಲೋಡ್" },
    description: { en: "Download your issued e-Khata certificate", kn: "ನಿಮ್ಮ ಇ-ಖಾತಾ ಪ್ರಮಾಣಪತ್ರ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ" },
    icon: "📥",
    directLink: "https://bbmpeaasthi.karnataka.gov.in/",
    steps: [
      {
        title: { en: "Step 1: Open the Website and Login", kn: "ಹಂತ 1: ವೆಬ್‌ಸೈಟ್ ತೆರೆಯಿರಿ ಮತ್ತು ಲಾಗಿನ್ ಆಗಿ" },
        instruction: {
          en: "Open 'bbmpeaasthi.karnataka.gov.in' in your browser. Login with your Username and Password.",
          kn: "ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ 'bbmpeaasthi.karnataka.gov.in' ತೆರೆಯಿರಿ. ನಿಮ್ಮ ಬಳಕೆದಾರ ಹೆಸರು ಮತ್ತು ಪಾಸ್‌ವರ್ಡ್‌ನೊಂದಿಗೆ ಲಾಗಿನ್ ಆಗಿ."
        },
        image: loginPage,
      },
      {
        title: { en: "Step 2: Go to Download Section", kn: "ಹಂತ 2: ಡೌನ್‌ಲೋಡ್ ವಿಭಾಗಕ್ಕೆ ಹೋಗಿ" },
        instruction: {
          en: "After login, look for 'Download e-Khata' in the menu. Search using your Property ID or Owner Name. Find your certificate in the list and click 'Download PDF'.",
          kn: "ಲಾಗಿನ್ ಆದ ನಂತರ, ಮೆನುವಿನಲ್ಲಿ 'Download e-Khata' ಹುಡುಕಿ. ನಿಮ್ಮ ಆಸ್ತಿ ID ಅಥವಾ ಮಾಲೀಕರ ಹೆಸರು ಬಳಸಿ ಹುಡುಕಿ. ಪಟ್ಟಿಯಲ್ಲಿ ನಿಮ್ಮ ಪ್ರಮಾಣಪತ್ರ ಕಂಡುಹಿಡಿಯಿರಿ ಮತ್ತು 'Download PDF' ಕ್ಲಿಕ್ ಮಾಡಿ."
        },
        image: downloadPage,
        highlightArea: { top: "45%", left: "65%", width: "20%", height: "8%" },
      },
    ],
  },
  {
    id: "b-to-a-khata",
    title: { en: "B-Khata to A-Khata Conversion", kn: "ಬಿ-ಖಾತಾ ಯಿಂದ ಎ-ಖಾತಾ ಪರಿವರ್ತನೆ" },
    description: { en: "Apply for B-Khata to A-Khata conversion", kn: "ಬಿ-ಖಾತಾ ಯಿಂದ ಎ-ಖಾತಾ ಪರಿವರ್ತನೆಗೆ ಅರ್ಜಿ" },
    icon: "🔄",
    directLink: "https://bbmpeaasthi.karnataka.gov.in/",
    steps: [
      {
        title: { en: "Step 1: Open Website and Login", kn: "ಹಂತ 1: ವೆಬ್‌ಸೈಟ್ ತೆರೆಯಿರಿ ಮತ್ತು ಲಾಗಿನ್ ಆಗಿ" },
        instruction: {
          en: "Open 'bbmpeaasthi.karnataka.gov.in' and login with your credentials. If you don't have an account, register first (see 'Apply e-Khata' guide for registration steps).",
          kn: "ವೆಬ್‌ಸೈಟ್ ತೆರೆಯಿರಿ ಮತ್ತು ನಿಮ್ಮ ರುಜುವಾತುಗಳೊಂದಿಗೆ ಲಾಗಿನ್ ಆಗಿ. ನಿಮಗೆ ಖಾತೆ ಇಲ್ಲದಿದ್ದರೆ, ಮೊದಲು ನೋಂದಣಿ ಮಾಡಿ."
        },
        image: loginPage,
      },
      {
        title: { en: "Step 2: Select 'Khata Conversion' Service", kn: "ಹಂತ 2: 'ಖಾತಾ ಪರಿವರ್ತನೆ' ಸೇವೆ ಆಯ್ಕೆ ಮಾಡಿ" },
        instruction: {
          en: "In the Citizen Services menu, look for 'B-Khata to A-Khata Conversion' or 'Khata Transfer'. Click on it. Fill in your existing B-Khata number and property details.",
          kn: "ನಾಗರಿಕ ಸೇವೆಗಳ ಮೆನುವಿನಲ್ಲಿ, 'B-Khata to A-Khata Conversion' ಅಥವಾ 'Khata Transfer' ಹುಡುಕಿ. ಅದನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ. ನಿಮ್ಮ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ B-Khata ಸಂಖ್ಯೆ ಮತ್ತು ಆಸ್ತಿ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ."
        },
        image: bbmpHomepage,
        highlightArea: { top: "30%", left: "68%", width: "28%", height: "6%" },
      },
      {
        title: { en: "Step 3: Upload Documents and Submit", kn: "ಹಂತ 3: ದಾಖಲೆಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು ಸಲ್ಲಿಸಿ" },
        instruction: {
          en: "Upload your B-Khata certificate, Sale Deed, Tax paid receipts, and Encumbrance Certificate. Review all details carefully. Click 'Submit'. Note the ePID number for tracking.",
          kn: "ನಿಮ್ಮ B-Khata ಪ್ರಮಾಣಪತ್ರ, ಮಾರಾಟ ಪತ್ರ, ತೆರಿಗೆ ರಸೀದಿಗಳು, ಮತ್ತು ಹೊರೆ ಪ್ರಮಾಣಪತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ. ಎಲ್ಲಾ ವಿವರಗಳನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಪರಿಶೀಲಿಸಿ. 'Submit' ಕ್ಲಿಕ್ ಮಾಡಿ."
        },
        image: applicationForm,
      },
    ],
  },
  {
    id: "transfer-ekhata",
    title: { en: "Transfer e-Khata (Mutation)", kn: "ಇ-ಖಾತಾ ವರ್ಗಾವಣೆ (ಮ್ಯುಟೇಶನ್)" },
    description: { en: "Transfer Khata through inheritance mutation", kn: "ಉತ್ತರಾಧಿಕಾರ ಮ್ಯುಟೇಶನ್ ಮೂಲಕ ಖಾತಾ ವರ್ಗಾವಣೆ" },
    icon: "🔀",
    directLink: "https://bbmpeaasthi.karnataka.gov.in/",
    steps: [
      {
        title: { en: "Step 1: Login to the Portal", kn: "ಹಂತ 1: ಪೋರ್ಟಲ್‌ಗೆ ಲಾಗಿನ್ ಆಗಿ" },
        instruction: {
          en: "Open 'bbmpeaasthi.karnataka.gov.in' and login. You must be the legal heir or have proper documentation for the transfer.",
          kn: "'bbmpeaasthi.karnataka.gov.in' ತೆರೆಯಿರಿ ಮತ್ತು ಲಾಗಿನ್ ಆಗಿ. ನೀವು ಕಾನೂನುಬದ್ಧ ಉತ್ತರಾಧಿಕಾರಿಯಾಗಿರಬೇಕು ಅಥವಾ ವರ್ಗಾವಣೆಗೆ ಸರಿಯಾದ ದಾಖಲೆಗಳನ್ನು ಹೊಂದಿರಬೇಕು."
        },
        image: loginPage,
      },
      {
        title: { en: "Step 2: Select 'Mutation/Transfer' Service", kn: "ಹಂತ 2: 'ಮ್ಯುಟೇಶನ್/ವರ್ಗಾವಣೆ' ಸೇವೆ ಆಯ್ಕೆ" },
        instruction: {
          en: "Navigate to 'Citizen Services' and select 'Mutation' or 'Khata Transfer'. Enter the existing Khata number and original owner's details.",
          kn: "'Citizen Services' ಗೆ ಹೋಗಿ ಮತ್ತು 'Mutation' ಅಥವಾ 'Khata Transfer' ಆಯ್ಕೆ ಮಾಡಿ. ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಖಾತಾ ಸಂಖ್ಯೆ ಮತ್ತು ಮೂಲ ಮಾಲೀಕರ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ."
        },
        image: bbmpHomepage,
      },
      {
        title: { en: "Step 3: Upload Legal Documents", kn: "ಹಂತ 3: ಕಾನೂನು ದಾಖಲೆಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ" },
        instruction: {
          en: "Upload: Death Certificate (if inheritance), Legal Heir Certificate, Sale Deed or Gift Deed, Latest Tax Receipt, ID Proof of new owner. Fill in new owner details and submit.",
          kn: "ಅಪ್‌ಲೋಡ್ ಮಾಡಿ: ಮರಣ ಪ್ರಮಾಣಪತ್ರ (ಉತ್ತರಾಧಿಕಾರವಾದರೆ), ಕಾನೂನುಬದ್ಧ ಉತ್ತರಾಧಿಕಾರಿ ಪ್ರಮಾಣಪತ್ರ, ಮಾರಾಟ ಪತ್ರ ಅಥವಾ ಉಡುಗೊರೆ ಪತ್ರ, ಇತ್ತೀಚಿನ ತೆರಿಗೆ ರಸೀದಿ, ಹೊಸ ಮಾಲೀಕರ ID ಪುರಾವೆ."
        },
        image: applicationForm,
      },
    ],
  },
];

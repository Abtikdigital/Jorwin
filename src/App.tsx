import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./section/Loader";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Career = lazy(() => import("./pages/Career"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const ExpandedBlog = lazy(() => import("./pages/ExpandedBlog"));
const ScrollToUp = lazy(() => import("./section/ScrollToUp"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

// Funding Solution
const MSMELoans = lazy(() => import("./pages/MSMELoans"))
const SeedFund = lazy(() => import("./pages/SeedFundService"));
const PMEGP = lazy(() => import("./pages/PMEGPService"));
const CMEGP = lazy(() => import("./pages/CMEGPService"));
const PMFME = lazy(() => import("./pages/PMFMEService"));
const StandUpIndia = lazy(() => import("./pages/StandUpIndiaService"));
const MudraLoan = lazy(() => import("./pages/MudraLoan"));
const Udaan = lazy(() => import("./pages/Udaan"));
const CGTMSE = lazy(() => import("./pages/CGTMSEService"));
const TaxAssumptionCertificate = lazy(() => import("./pages/TaxExemptionCertificate"))
const NAIFF_AIFFService = lazy(() => import("./pages/NAIFF_AIFFService"));
const AgriSure = lazy(() => import("./pages/AgrisureService"));
const BusinessLoan = lazy(() => import("./pages/BusinessLoanService"));
const LAP = lazy(() => import("./pages/LAPService"));
const CashCredit = lazy(() => import("./pages/CashCreditService"));
const Overdraft = lazy(() => import("./pages/OverdraftService"));
const DroplineOverdraft = lazy(() => import("./pages/DroplineOdService"));
const Sme = lazy(() => import("./pages/SmeService"));
const TermLoan = lazy(() => import("./pages/TermService"));
const ProjectFunding = lazy(() => import("./pages/ProjectFunding"));
const Grants = lazy(() => import("./pages/GrantsService"));
const AngelInverstor = lazy(() => import("./pages/Angelinverstor"))
const VCInverstor = lazy(() => import("./pages/VCInvestor"))
const NBFC = lazy(() => import("./pages/NBFC"))
// Trade Mark And Ip
const TrademarkRegistrationAndFilling = lazy(
  () => import("./pages/TrademarkRegistrationAndFillingService")
);
const CopyRight = lazy(() => import("./pages/CopyRightService"));
const PatentFiling = lazy(() => import("./pages/PatentFilingService"));

// Certificate
const StartupIndiaCertificate = lazy(
  () => import("./pages/StartupIndiaCertificate")
);
const MSMECertificate = lazy(() => import("./pages/MSMECertificate"));
const MakeInIndiaCertificate = lazy(
  () => import("./pages/MakeInIndiaCertificate")
);
const ZEDCertificate = lazy(() => import("./pages/ZedCertificate"));
const ISOCertificate = lazy(() => import("./pages/IsoCertificate"));
const TradeLicenseCertificate = lazy(() => import("./pages/TradeLicence"));
const FSSAILicense = lazy(() => import("./pages/FssaiLiecence"))

// Tax Compliance
const GSTRegistrationFiling = lazy(
  () => import("./pages/GstRegistration_Filling")
);
const TdsCompliance = lazy(() => import("./pages/TdsCompliance"));
const AnnualCompliance = lazy(() => import("./pages/AnnualComplaince"));

// Businness Registration
const PrivateLimited = lazy(() => import("./pages/PrivateLimitedService"));
const Llp = lazy(() => import("./pages/LlpService"));
const SoleProprietor = lazy(() => import("./pages/SoleProprietorship"));
const Section8Company = lazy(() => import("./pages/Section8Company"));
const Partnership = lazy(() => import("./pages/PartnershipFirm"));
const ProducerCompany = lazy(() => import("./pages/ProducerCompany"));

// News And Insights
const EBook=lazy(()=>import("./pages/EBook"))
const PdfPreview=lazy(()=>import("./pages/PdfPreview"))

// Legal
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
// const RefundPolicy = lazy(() => import("./pages/RefundPolicy"))
function App() {
  
  return (
    <BrowserRouter>
      <ScrollToUp />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news-insights/blogs" element={<Blog />} />
          <Route path="/news-insights/e-books" element={<EBook />} />
                 <Route path="/files/:fileName" element={<PdfPreview />} />

          <Route path="/expandedBlog/:slug" element={<ExpandedBlog />} />

          <Route path="/services/funding/seed-fund" element={<SeedFund />} />
          <Route path="/services/funding/subsidy/pmegp" element={<PMEGP />} />
          <Route path="/services/funding/subsidy/cmegp" element={<CMEGP />} />
          <Route path="/services/funding/subsidy/pmfme" element={<PMFME />} />
          <Route
            path="/services/funding/subsidy/stand-up-india"
            element={<StandUpIndia />}
          />
          <Route path="/services/funding/grants" element={<Grants />} />
          <Route
            path="/services/funding/msme-loans"
            element={<MSMELoans />}
          />
          <Route
            path="/services/funding/msme-loan/mudra"
            element={<MudraLoan />}
          />
          <Route path="/services/funding/msme-loan/udaan" element={<Udaan />} />
          <Route
            path="/services/funding/msme-loan/cgtmse"
            element={<CGTMSE />}
          />
          <Route
            path="/services/funding/agriculture/naiff-aiff"
            element={<NAIFF_AIFFService />}
          />
          <Route
            path="/services/funding/agriculture/agrisure"
            element={<AgriSure />}
          />
          <Route
            path="/services/funding/loans/business-loan"
            element={<BusinessLoan />}
          />
          <Route path="/services/funding/loans/lap" element={<LAP />} />
          <Route
            path="/services/funding/loans/cash-credit"
            element={<CashCredit />}
          />
          <Route
            path="/services/funding/loans/cash-credit"
            element={<CashCredit />}
          />
          <Route
            path="/services/funding/loans/overdraft"
            element={<Overdraft />}
          />
          <Route
            path="/services/funding/loans/dropline-od"
            element={<DroplineOverdraft />}
          />
          <Route path="/services/funding/loans/sme" element={<Sme />} />
          <Route
            path="/services/funding/loans/term-loan"
            element={<TermLoan />}
          />
          <Route
            path="/services/funding/loans/project-funding"
            element={<ProjectFunding />}
          />
          <Route
            path="/services/funding/private-funding/angel-investor"
            element={<AngelInverstor />}
          />
          <Route
            path="/services/funding/private-funding/venture-capital"
            element={<VCInverstor />}
          />
          <Route
            path="/services/funding/private-funding/nbfc"
            element={<NBFC />}
          />
          <Route
            path="/services/legal/trademark-registration"
            element={<TrademarkRegistrationAndFilling />}
          />
          <Route
            path="/services/legal/copyright-protection"
            element={<CopyRight />}
          />
          <Route
            path="/services/legal/patent-filing"
            element={<PatentFiling />}
          />

          <Route
            path="/services/certificate/fssai-licence"
            element={<FSSAILicense />}
          />


          <Route
            path="/services/certificate/startup-india"
            element={<StartupIndiaCertificate />}
          />
          <Route
            path="/services/certificate/tax-exemption-certificate"
            element={<TaxAssumptionCertificate />}
          />
          <Route
            path="/services/certificate/msme"
            element={<MSMECertificate />}
          />
          <Route
            path="/services/certificate/make-in-india"
            element={<MakeInIndiaCertificate />}
          />
          <Route
            path="/services/certificate/zed"
            element={<ZEDCertificate />}
          />

          <Route
            path="/services/certificate/iso"
            element={<ISOCertificate />}
          />
          <Route
            path="/services/certificate/trade-licence"
            element={<TradeLicenseCertificate />}
          />

          <Route
            path="/services/tax/gst-filing"
            element={<GSTRegistrationFiling />}
          />

          <Route
            path="/services/tax/tds-compliance"
            element={<TdsCompliance />}
          />
          <Route
            path="/services/tax/annual-compliance"
            element={<AnnualCompliance />}
          />

          <Route
            path="/services/registration/private-limited"
            element={<PrivateLimited />}
          />
          <Route path="/services/registration/llp" element={<Llp />} />
          <Route
            path="/services/registration/proprietorship"
            element={<SoleProprietor />}
          />
          <Route
            path="/services/registration/partnership"
            element={<Partnership />}
          />
          <Route
            path="/services/registration/section8company"
            element={<Section8Company />}
          />
          <Route
            path="/services/registration/producer"
            element={<ProducerCompany />}
          />
          <Route
            path="/legal/privacy-policy"
            element={<PrivacyPolicy />}
          />
          {/* <Route
            path="/legal/refund-policy"
            element={<RefundPolicy />}
          /> */}

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

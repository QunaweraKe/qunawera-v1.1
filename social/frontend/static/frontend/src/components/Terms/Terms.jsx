
import React from 'react';

import { APP_NAME } from '../../constants';

// MATERIAL UI
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Tooltip } from '@material-ui/core';


const Terms = () => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
   <div>
     <Tooltip title="Read our Terms & Privacy" arrow placement="bottom">
    <Button color="secondary" onClick={handleClickOpen('paper')} size="small" >
       <span style={{fontSize:"12px",fontWeight:"bolder"}}>Terms&Privacy</span>
      </Button>
      </Tooltip>
     <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
    fullWidth
     maxWidth="lg"
      >
        <DialogTitle style={{fontSize:"25px",marginBottom:"20px",marginTop:"20px",fontWeight:"bold"}}>{APP_NAME}:Terms{"&"}Privacy</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText

            ref={descriptionElementRef}

          >
<h1>Privacy Policy</h1>
<p>Last updated: May 14, 2021</p>
<p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
<p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
<h1>Interpretation and Definitions</h1>
<h2>Interpretation</h2>
<p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
<h2>Definitions</h2>
<p>For the purposes of this Privacy Policy:</p>
<ul>
<li>
<p><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>
</li>
<li>
<p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
</li>
<li>
<p><strong>Application</strong> means the software program provided by the Company downloaded by You on any electronic device, named Qunawera LLC</p>
</li>
<li>
<p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Qunawera LLC, Kenya,Nrb 6019.</p>
</li>
<li>
<p><strong>Country</strong> refers to:  Kenya</p>
</li>
<li>
<p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
</li>
<li>
<p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>
</li>
<li>
<p><strong>Service</strong> refers to the Application.</p>
</li>
<li>
<p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
</li>
<li>
<p><strong>Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Service.</p>
</li>
<li>
<p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
</li>
<li>
<p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
</li>
</ul>
<h1>Collecting and Using Your Personal Data</h1>
<h2>Types of Data Collected</h2>
<h3>Personal Data</h3>
<p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
<ul>
<li>
<p>Email address</p>
</li>
<li>
<p>First name and last name</p>
</li>
<li>
<p>Phone number</p>
</li>
<li>
<p>Address, State, Province, ZIP/Postal code, City</p>
</li>
<li>
<p>Usage Data</p>
</li>
</ul>
<h3>Usage Data</h3>
<p>Usage Data is collected automatically when using the Service.</p>
<p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
<p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
<p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
<h3>Information from Third-Party Social Media Services</h3>
<p>The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:</p>
<ul>
<li>Google</li>
<li>Facebook</li>
<li>Twitter</li>
</ul>
<p>If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account.</p>
<p>You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.</p>
<h3>Information Collected while Using the Application</h3>
<p>While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission:</p>
<ul>
<li>Pictures and other information from your Device's camera and photo library</li>
</ul>
<p>We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it may be simply stored on Your device.</p>
<p>You can enable or disable access to this information at any time, through Your Device settings.</p>
<h2>Use of Your Personal Data</h2>
<p>The Company may use Personal Data for the following purposes:</p>
<ul>
<li>
<p><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</p>
</li>
<li>
<p><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
</li>
<li>
<p><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
</li>
<li>
<p><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
</li>
<li>
<p><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>
</li>
<li>
<p><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</p>
</li>
<li>
<p><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>
</li>
<li>
<p><strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
</li>
</ul>
<p>We may share Your personal information in the following situations:</p>
<ul>
<li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service,  to contact You.</li>
<li><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
<li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
<li><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
<li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.</li>
<li><strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your consent.</li>
</ul>
<h2>Retention of Your Personal Data</h2>
<p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
<p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
<h2>Transfer of Your Personal Data</h2>
<p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
<p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
<p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
<h2>Disclosure of Your Personal Data</h2>
<h3>Business Transactions</h3>
<p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
<h3>Law enforcement</h3>
<p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
<h3>Other legal requirements</h3>
<p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
<ul>
<li>Comply with a legal obligation</li>
<li>Protect and defend the rights or property of the Company</li>
<li>Prevent or investigate possible wrongdoing in connection with the Service</li>
<li>Protect the personal safety of Users of the Service or the public</li>
<li>Protect against legal liability</li>
</ul>
<h2>Security of Your Personal Data</h2>
<p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
<h1>Children's Privacy</h1>
<p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
<p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
<h1>Links to Other Websites</h1>
<p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
<p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
<h1>Changes to this Privacy Policy</h1>
<p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
<p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
<p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
<h1>Contact Us</h1>
<p>If you have any questions about this Privacy Policy, You can contact us:</p>
<ul>
<li>By email: qunawerasupport@gmail.com</li>
</ul>

<h1>Cookies Policy</h1>
<p>Last updated: May 14, 2021</p>
<p>This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used. This Cookies Policy has been created with the help of the <a href="https://www.freeprivacypolicy.com/free-cookies-policy-generator/" target="_blank">Cookies Policy Generator</a>.</p>
<p>Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.</p>
<p>We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.</p>
<h1>Interpretation and Definitions</h1>
<h2>Interpretation</h2>
<p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
<h2>Definitions</h2>
<p>For the purposes of this Cookies Policy:</p>
<ul>
<li><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Cookies Policy) refers to Qunawera LLC, Nairobi,6019.</li>
<li><strong>Cookies</strong> means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.</li>
<li><strong>Website</strong> refers to Qunawera, accessible from <a href="www.qunawera.com" rel="external nofollow noopener" target="_blank">www.qunawera.com</a></li>
<li><strong>You</strong> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.</li>
</ul>
<h1>The use of the Cookies</h1>
<h2>Type of Cookies We Use</h2>
<p>Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.</p>
<p>We use both session and persistent Cookies for the purposes set out below:</p>
<ul>
<li>
<p><strong>Necessary / Essential Cookies</strong></p>
<p>Type: Session Cookies</p>
<p>Administered by: Us</p>
<p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
</li>
<li>
<p><strong>Functionality Cookies</strong></p>
<p>Type: Persistent Cookies</p>
<p>Administered by: Us</p>
<p>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
</li>
</ul>
<h2>Your Choices Regarding Cookies</h2>
<p>If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.</p>
<p>If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.</p>
<p>If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.</p>
<ul>
<li>
<p>For the Chrome web browser, please visit this page from Google: <a href="https://support.google.com/accounts/answer/32050" rel="external nofollow noopener" target="_blank">https://support.google.com/accounts/answer/32050</a></p>
</li>
<li>
<p>For the Internet Explorer web browser, please visit this page from Microsoft: <a href="http://support.microsoft.com/kb/278835" rel="external nofollow noopener" target="_blank">http://support.microsoft.com/kb/278835</a></p>
</li>
<li>
<p>For the Firefox web browser, please visit this page from Mozilla: <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" rel="external nofollow noopener" target="_blank">https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</a></p>
</li>
<li>
<p>For the Safari web browser, please visit this page from Apple: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" rel="external nofollow noopener" target="_blank">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></p>
</li>
</ul>
<p>For any other web browser, please visit your web browser's official web pages.</p>
<h2>More Information about Cookies</h2>
<p>You can learn more about cookies: <a href="https://www.freeprivacypolicy.com/blog/cookies/" target="_blank">Cookies: What Do They Do?</a>.</p>
<h2>Contact Us</h2>
<p>If you have any questions about this Cookies Policy, You can contact us:</p>
<ul>
<li>By email: qunawerasupport@gmail.com</li>
</ul>
<h1>End-User License Agreement (&quot;Agreement&quot;)</h1>
<p>Last updated: May 14, 2021</p>
<p>Please read this End-User License Agreement carefully before clicking the &quot;I Agree&quot; button, downloading or using Qunawera.</p>
<h1>Interpretation and Definitions</h1>
<h2>Interpretation</h2>
<p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
<h2>Definitions</h2>
<p>For the purposes of this End-User License Agreement:</p>
<ul>
<li>
<p><strong>Agreement</strong> means this End-User License Agreement that forms the entire agreement between You and the Company regarding the use of the Application. This Agreement has been created with the help of the <a href="https://www.freeprivacypolicy.com/free-eula-generator/" target="_blank">EULA Generator</a>.</p>
</li>
<li>
<p><strong>Application</strong> means the software program provided by the Company downloaded by You to a Device, named Qunawera</p>
</li>
<li>
<p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Qunawera LLC, Nairobi,6019.</p>
</li>
<li>
<p><strong>Content</strong> refers to content such as text, images, or other information that can be posted, uploaded, linked to or otherwise made available by You, regardless of the form of that content.</p>
</li>
<li>
<p><strong>Country</strong> refers to:  Kenya</p>
</li>
<li>
<p><strong>Device</strong> means any device that can access the Application such as a computer, a cellphone or a digital tablet.</p>
</li>
<li>
<p><strong>Third-Party Services</strong> means any services or content (including data, information, applications and other products services) provided by a third-party that may be displayed, included or made available by the Application.</p>
</li>
<li>
<p><strong>You</strong> means the individual accessing or using the Application or the company, or other legal entity on behalf of which such individual is accessing or using the Application, as applicable.</p>
</li>
</ul>
<h1>Acknowledgment</h1>
<p>By clicking the &quot;I Agree&quot; button, downloading or using the Application, You are agreeing to be bound by the terms and conditions of this Agreement. If You do not agree to the terms of this Agreement, do not click on the &quot;I Agree&quot; button, do not download or do not use the Application.</p>
<p>This Agreement is a legal document between You and the Company and it governs your use of the Application made available to You by the Company.</p>
<p>The Application is licensed, not sold, to You by the Company for use strictly in accordance with the terms of this Agreement.</p>
<h1>License</h1>
<h2>Scope of License</h2>
<p>The Company grants You a revocable, non-exclusive, non-transferable, limited license to download, install and use the Application strictly in accordance with the terms of this Agreement.</p>
<p>The license that is granted to You by the Company is solely for your personal, non-commercial purposes strictly in accordance with the terms of this Agreement.</p>
<h1>Third-Party Services</h1>
<p>The Application may display, include or make available third-party content (including data, information, applications and other products services) or provide links to third-party websites or services.</p>
<p>You acknowledge and agree that the Company shall not be responsible for any Third-party Services, including their accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect thereof. The Company does not assume and shall not have any liability or responsibility to You or any other person or entity for any Third-party Services.</p>
<p>You must comply with applicable Third parties' Terms of agreement when using the Application. Third-party Services and links thereto are provided solely as a convenience to You and You access and use them entirely at your own risk and subject to such third parties' Terms and conditions.</p>
<h1>Term and Termination</h1>
<p>This Agreement shall remain in effect until terminated by You or the Company.
The Company may, in its sole discretion, at any time and for any or no reason, suspend or terminate this Agreement with or without prior notice.</p>
<p>This Agreement will terminate immediately, without prior notice from the Company, in the event that you fail to comply with any provision of this Agreement. You may also terminate this Agreement by deleting the Application and all copies thereof from your Device or from your computer.</p>
<p>Upon termination of this Agreement, You shall cease all use of the Application and delete all copies of the Application from your Device.</p>
<p>Termination of this Agreement will not limit any of the Company's rights or remedies at law or in equity in case of breach by You (during the term of this Agreement) of any of your obligations under the present Agreement.</p>
<h1>Indemnification</h1>
<p>You agree to indemnify and hold the Company and its parents, subsidiaries, affiliates, officers, employees, agents, partners and licensors (if any) harmless from any claim or demand, including reasonable attorneys' fees, due to or arising out of your: (a) use of the Application; (b) violation of this Agreement or any law or regulation; or (c) violation of any right of a third party.</p>
<h1>No Warranties</h1>
<p>The Application is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Application, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Application will meet your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>
<p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Application, or the information, content, and materials or products included thereon; (ii) that the Application will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Application; or (iv) that the Application, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>
<p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law. To the extent any warranty exists under law that cannot be disclaimed, the Company shall be solely responsible for such warranty.</p>
<h1>Limitation of Liability</h1>
<p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Agreement and your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You for the Application or through the Application or 100 USD if You haven't purchased anything through the Application.</p>
<p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Application, third-party software and/or third-party hardware used with the Application, or otherwise in connection with any provision of this Agreement), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
<p>Some states/jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation or exclusion may not apply to You.</p>
<h1>Severability and Waiver</h1>
<h2>Severability</h2>
<p>If any provision of this Agreement is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
<h2>Waiver</h2>
<p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Agreement shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent breach.</p>
<h1>Product Claims</h1>
<p>The Company does not make any warranties concerning the Application.</p>
<h1>United States Legal Compliance</h1>
<p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a &quot;terrorist supporting&quot; country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
<h1>Changes to this Agreement</h1>
<p>The Company reserves the right, at its sole discretion, to modify or replace this Agreement at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at the sole discretion of the Company.</p>
<p>By continuing to access or use the Application after any revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, You are no longer authorized to use the Application.</p>
<h1>Governing Law</h1>
<p>The laws of the Country, excluding its conflicts of law rules, shall govern this Agreement and your use of the Application. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
<h1>Entire Agreement</h1>
<p>The Agreement constitutes the entire agreement between You and the Company regarding your use of the Application and supersedes all prior and contemporaneous written or oral agreements between You and the Company.</p>
<p>You may be subject to additional terms and conditions that apply when You use or purchase other Company's services, which the Company will provide to You at the time of such use or purchase.</p>
<h1>Contact Us</h1>
<p>If you have any questions about this Agreement, You can contact Us:</p>
<ul>
<li>By email: supportqunawera@gmail.com</li>
</ul>
<h1>Disclaimer</h1>
<p>Last updated: May 14, 2021</p>
<h1>Interpretation and Definitions</h1>
<h2>Interpretation</h2>
<p>The words of which the initial letter is capitalized have meanings defined under the following conditions.
The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
<h2>Definitions</h2>
<p>For the purposes of this Disclaimer:</p>
<ul>
<li>
<p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Disclaimer) refers to Qunawera LLC, Nairobi,6019.</p>
</li>
<li>
<p><strong>Service</strong> refers to the Application.</p>
</li>
<li>
<p><strong>You</strong> means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
</li>
<li>
<p><strong>Application</strong> means the software program provided by the Company downloaded by You on any electronic device named Qunawera.</p>
</li>
</ul>
<h1>Disclaimer</h1>
<p>The information contained on the Service is for general information purposes only.</p>
<p>The Company assumes no responsibility for errors or omissions in the contents of the Service.</p>
<p>In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice. This Disclaimer has been created with the help of the <a href="https://www.freeprivacypolicy.com/free-disclaimer-generator/" target="_blank">Disclaimer Generator</a>.</p>
<p>The Company does not warrant that the Service is free of viruses or other harmful components.</p>
<h1>External Links Disclaimer</h1>
<p>The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.</p>
<p>Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
<h1>Errors and Omissions Disclaimer</h1>
<p>The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to insure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.</p>
<p>The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.</p>
<h1>Fair Use Disclaimer</h1>
<p>The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.</p>
<p>The Company believes this constitutes a &quot;fair use&quot; of any such copyrighted material as provided for in section 107 of the United States Copyright law.</p>
<p>If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.</p>
<h1>Views Expressed Disclaimer</h1>
<p>The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company.</p>
<p>Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserve the right to delete any comment for any reason whatsoever.</p>
<h1>No Responsibility Disclaimer</h1>
<p>The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.</p>
<p>In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.</p>
<h1>&quot;Use at Your Own Risk&quot; Disclaimer</h1>
<p>All information in the Service is provided &quot;as is&quot;, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.</p>
<p>The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.</p>
<h1>Contact Us</h1>
<p>If you have any questions about this Disclaimer, You can contact Us:</p>
<ul>
<li>By email: qunawerasupport@gmail.com</li>
</ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>

          <Button onClick={handleClose} color="secondary" variant="outlined" size="small" style={{fontWeight:"bold"}}>
           I have Read and Understood the Terms
         </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
};


export default Terms;

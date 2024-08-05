import Head from "next/head";

const Maintenance: React.FunctionComponent = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gray-100">
      <Head>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.USER_DATA = {'id': '374494','email': 'andrii.cherkas@unidatalab.com', 'email_verified': true, 'first_name': 'Andrii', 'last_name': 'Cherkas','full_name': 'Andrii Cherkas',};\n// For demonstration, let's log the USER_DATA to the console\nconsole.log(window.USER_DATA);`,
          }}
        ></script> */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://reflectoadmin.s3.amazonaws.com/client-widget/develop/index.css"
        />
        <script
          type="module"
          src="https://reflectoadmin.s3.amazonaws.com/client-widget/develop/index.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.addEventListener('DOMContentLoaded', function() {window.ChatAi.init({projectId: "f3e90373-de20-4779-ad28-7a1dde3b86b1", user: "andrii.cherkas@unidatalab.com"});});`,
          }}
        ></script>

        <title>Down for maintenance - Be right back</title>
      </Head>
      <div className="w-96 rounded-lg border bg-white p-8 text-center shadow-sm">
        <div className="">
          The site is currently down for some maintenance and will be back
          shortly…
        </div>
      </div>
    </div>
  );
};

export default Maintenance;

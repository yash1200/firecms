import React from "react";

// @ts-ignore
import featuresBg from "@site/static/img/features-bg.png";
// @ts-ignore
import featuresElement from "@site/static/img/features-element.png";

// @ts-ignore
import ReactLogo from "@site/static/img/reactjs-icon.svg";
// @ts-ignore
import FireCMSLogo from "@site/static/img/firecms_logo.svg";
// @ts-ignore
import FirebaseLogo from "@site/static/img/firebase.svg";
// @ts-ignore
import pricePreview from "@site/static/img/price.png";

import SettingsIcon from "@site/static/img/icons/settings.svg";
import DashboardIcon from "@site/static/img/icons/dashboard.svg";
import LightingIcon from "@site/static/img/icons/lighting.svg";

// @ts-ignore
import editingDemoVideo from "@site/static/img/editing_demo.mp4";
// @ts-ignore
import editingDemoDarkVideo from "@site/static/img/editing_demo_dark.mp4";
// @ts-ignore
import customFieldVideo from "@site/static/img/custom_fields.mp4";
// @ts-ignore
import inlineEditingVideo from "@site/static/img/inline_table_editing.mp4";
// @ts-ignore
import customFieldDarkVideo from "@site/static/img/custom_fields_dark.mp4";

import { useColorMode } from "@docusaurus/theme-common";
import { TwoColumns } from "../general/TwoColumns";
import { ContainerMixin, ContainerSmallMixin } from "../utils";
import { BrowserFrame } from "../BrowserFrame";
import { Panel } from "../general/Panel";

function RealTime() {

    const { colorMode } = useColorMode();
    const isDarkTheme = colorMode === "dark";

    return (
        <section className={ContainerSmallMixin + " my-16"}>

            <div className={"flex items-center mb-3 "}>

                <div
                    className="flex items-center justify-center text-white w-10 h-10 bg-gray-800 rounded-full shadow flex-shrink-0 mr-3">
                    <LightingIcon height={12} width={12}/>
                </div>

                <h3 className="h3 m-0">
                    Real-time updates
                </h3>

            </div>

            <p>FireCMS uses Firestore as a backend, which is a <strong>real time
                database</strong>. This means
                that any change in the database is reflected in the CMS in real
                time.
                This is a very powerful feature that allows you to have a CMS
                that is always
                up-to-date with the data in the database.</p>

            <p>These updates will be reflected both in the table and in the edit
                form (as long
                as you have not modified the specific field that was
                updated).</p>

            <p>This allows you to move some of your logic to backend functions,
                or have
                completely dynamic data, and still have a CMS that is always
                up-to-date.</p>

            <p>There is a big benefit to using Firebase/Firestore as a backend
                for your CMS:
                you can leverage all the advanced features that Google Cloud
                Platform offers,
                such as <strong>Cloud Functions</strong>, <strong>Cloud
                    Storage</strong>, <strong>BigQuery</strong>, etc.</p>

            <p>There are very <strong>few CMSs</strong> that show always
                up-to-date data, so if this a feature
                you need, FireCMS is your best bet!</p>

            <div
                className="max-w-5xl md:max-w-5xl md:w-full mx-auto md:col-span-9 md:pr-4 md:pr-8 flex justify-center flex-col h-full"
            >
                <BrowserFrame>
                    <video
                        // style={{
                        //     aspectRatio: 842 / 463,
                        // }}
                        width="100%" loop autoPlay muted>
                        <source src={inlineEditingVideo}
                                type="video/mp4"/>
                    </video>
                </BrowserFrame>
            </div>

        </section>
    );
}

export default RealTime;

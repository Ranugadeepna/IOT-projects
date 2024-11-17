import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, enableLocalization, registerCustomWidgetTemplate, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper } from "uxp/components";
import { IWDDesignModeProps } from "widget-designer/components";
import BundleConfig from '../bundle.json';

import './styles.scss';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import './styles.scss';

export interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
    designer?: IWDDesignModeProps,
    uiProps?: any
}

const NewUi2Widget: React.FunctionComponent<IWidgetProps> = (props) => {
    return (
        <WidgetWrapper>
            <>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ flex: 1 }}>
                    <Navbar />
                    <div style={{ padding: "16px" }}>
                        <Home />
                    </div>
                </div>
            </div>
        </>
        </WidgetWrapper>
    )
};

/**
 * Register as a Widget
 */
registerWidget({
    id: "newUi2",
    widget: NewUi2Widget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});

/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "newUi2",
    label: "NewUi2",
    // click: () => alert("Hello"),
    component: NewUi2Widget
});
*/

/**
 * Register as a UI
 */


registerUI({
   id:"newUi2",
   component: NewUi2Widget
});


/**
 * Register as a Widget template
 * This will enable this widget to be edited through the designer
 */

/**
registerCustomWidgetTemplate({
    id: "newUi2", // use all lowercase letters
    name: 'NewUi2',
    description: 'Tempalte Description',
    template: NewUi2Widget,
    moduleId: BundleConfig.id,
    complexity: 'advanced',
    icon: ['fas', 'list'],
    expectedSchema: 'dictionary-array'
});
*/


/**
 * Enable localization
 *
 * This will enable the localization
 *
 * you can use uxpContext.$L() function
 *
 * Ex: Assume you  have a localization message in localization json
 *
 * ```
 * // localization.json
 *
 * {
 *      "uxp.my-widget.title": {
 *          "en": "This is my widget" // english translation,
 *          "ar": "<arabic tranlation >",
 *          ... here goes other translations
 *      }
 * }
 *
 * ```
 *
 *
 * thne in your widget
 *
 * ```
 * // your widget
 *
 * return <WidgetWrapper>
 *      <div class='title'>
 *          {props.uxpContext.$L('uxp.my-widget.title')}
 *      </div>
 *  </WidgetWrapper>
 *
 * ```
 *
 * /// you can have parameters as well
 * // we use `$` mark to identify params
 * // Ex: $name, $location
 *
 * ```
 * // localization.json
 *
 * {
 *      ...
 *      "uxp.my-widget.user-welcom-msg":{
 *          "en": "$userName welcome to my widget"
 *      }
 * }
 * ```
 *
 * in widget
 *
 * ```
 *      ...
 *      <div> {props.uxpContext.$L('uxp.my-widget.user-welcom-msg', {userName: "Jane Doe"})} </div>
 * ```
 *
 *
 */

// enableLocalization()
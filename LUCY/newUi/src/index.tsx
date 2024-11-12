import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, enableLocalization, registerCustomWidgetTemplate, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper } from "uxp/components";
import { IWDDesignModeProps } from "widget-designer/components";
import BundleConfig from '../bundle.json';


import { Route, Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Bins from "./components/Bins";
import Reports from "./components/Reports";
import './styles.scss';
import './style.css';

export interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
    designer?: IWDDesignModeProps,
    uiProps?: any
}

const NewUiWidget: React.FunctionComponent<IWidgetProps> = (props) => {
    return (
       
    <Router location={""} navigator={undefined}>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/bins" element={<Bins />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  </Router>
     
    )
};

/**
 * Register as a Widget
 */
// registerWidget({
//     id: "newUi",
//     widget: NewUiWidget,
//     configs: {
//         layout: {
//             // w: 12,
//             // h: 12,
//             // minH: 12,
//             // minW: 12
//         }
//     }
// });

/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "newUi",
    label: "NewUi",
    // click: () => alert("Hello"),
    component: NewUiWidget
});
*/

/**
 * Register as a UI
 */


registerUI({
   id:"newUi",
   component: NewUiWidget
});



/**
 * Register as a Widget template
 * This will enable this widget to be edited through the designer
 */

/**
registerCustomWidgetTemplate({
    id: "newUi", // use all lowercase letters
    name: 'NewUi',
    description: 'Tempalte Description',
    template: NewUiWidget,
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
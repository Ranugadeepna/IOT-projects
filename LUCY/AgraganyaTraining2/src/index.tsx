import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, enableLocalization, registerCustomWidgetTemplate, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper } from "uxp/components";
import { IWDDesignModeProps } from "widget-designer/components";
import BundleConfig from '../bundle.json';

import './styles.scss';
import MyComponent from "./components/Sample";


export interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
    designer?: IWDDesignModeProps,
    uiProps?: any
}

const AgraganyaTraining2Widget: React.FunctionComponent<IWidgetProps> = (props) => {
    return (
        
        <MyComponent />
      
    )
};

/**
 * Register as a Widget
 */
// registerWidget({
//     id: "AgraganyaTraining2",
//     widget: AgraganyaTraining2Widget,
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
    id: "AgraganyaTraining2",
    label: "AgraganyaTraining2",
    // click: () => alert("Hello"),
    component: AgraganyaTraining2Widget
});
*/

/**
 * Register as a UI
 */


registerUI({
   id:"AgraganyaTraining2",
   component: AgraganyaTraining2Widget
});



/**
 * Register as a Widget template
 * This will enable this widget to be edited through the designer
 */

/**
registerCustomWidgetTemplate({
    id: "AgraganyaTraining2", // use all lowercase letters
    name: 'AgraganyaTraining2',
    description: 'Tempalte Description',
    template: AgraganyaTraining2Widget,
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
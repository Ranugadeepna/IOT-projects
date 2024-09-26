import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, enableLocalization, registerCustomWidgetTemplate, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper } from "uxp/components";
import { IWDDesignModeProps } from "widget-designer/components";
import BundleConfig from '../bundle.json';



import './styles.scss';

export interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
    designer?: IWDDesignModeProps,
    uiProps?: any
}
import { useState, useEffect } from 'react';

const WastewidgetWidget: React.FunctionComponent<IWidgetProps> = (props) => {
    const [capacity, setCapacity] = useState(0);  // Initial capacity is 0
    const [statusColor, setStatusColor] = useState('green'); // Initial status color is green
    const [statusText, setStatusText] = useState('Not Full');
  
    useEffect(() => {
      // Simulate capacity update
    //   setCapacity(50); // You can change this to any dynamic value
      updateDustbinStatus(40); // Update status based on the new capacity
    }, []);
  
    const updateDustbinStatus = (newCapacity: number) => {
      setCapacity(newCapacity);
  
      if (newCapacity >= 75) {
        setStatusColor('red');
        setStatusText('Full');
      } else if (newCapacity >= 50) {
        setStatusColor('orange');
        setStatusText('Half Full');
      } else {
        setStatusColor('green');
        setStatusText('Not Full');
      }
    };
  
    return (
      <div id="dustbin-1" className="dustbin-card">
        <div className="card-header">
          <h3>Smart Dustbin #1</h3>
        </div>
        <div className="card-body">
          <div className="visual-indicator">
            <div
              className="visual-level"
              style={{ height: `${capacity}%` }} // Adjust the height and color based on capacity
            ></div>
          </div>
          <div className="dustbin-status">
            <span className="status-indicator" style={{ backgroundColor: statusColor }}></span>
            <span className="status-text">{statusText}</span>
          </div>
          <p>Location: Central Park</p>
          <p className="capacity">Capacity: {capacity}% Full</p>
        </div>
      </div>
    );
  };


/**
 * Register as a Widget
 */
registerWidget({
    id: "wastewidget",
    widget: WastewidgetWidget,
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
    id: "wastewidget",
    label: "Wastewidget",
    // click: () => alert("Hello"),
    component: WastewidgetWidget
});
*/

/**
 * Register as a UI
 */

/*
registerUI({
   id:"wastewidget",
   component: WastewidgetWidget
});
*/


/**
 * Register as a Widget template
 * This will enable this widget to be edited through the designer
 */

/**
registerCustomWidgetTemplate({
    id: "wastewidget", // use all lowercase letters
    name: 'Wastewidget',
    description: 'Tempalte Description',
    template: WastewidgetWidget,
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
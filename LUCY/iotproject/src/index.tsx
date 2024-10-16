import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, enableLocalization, registerCustomWidgetTemplate, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper } from "uxp/components";
import { IWDDesignModeProps } from "widget-designer/components";
import BundleConfig from '../bundle.json';
import { useState, useEffect } from "react";

import './styles.scss';
import './Dustbincardstyles.css';

export interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
    designer?: IWDDesignModeProps,
    uiProps?: any
}

interface MyWidgetProps extends IWidgetProps {
    id: string;
    name: string;
    level: number;
}

const DustbinWidget: React.FunctionComponent<MyWidgetProps> = (props) => {
    const [binLevel, setBinLevel] = useState<number>(10);
    const [binStatus, setBinStatus] = useState<string>('');
    const [binLiquidColor, setBinLiquidColor] = useState<string>('gradient-color-green');
    const [binPercentage, setBinPercentage] = useState<string>('0%');
    const [dustbinId, setDustbinId] = useState<string>(props.id);
    const [dustbinData, setDustbinData] = useState<any>(null); // To hold the fetched data
    const [binLocation, setBinLocation] = useState<string>('location');

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            const res = await props.uxpContext.executeAction('ranuga-exercise-model', 'getwastedata', {}, { json: true });
            
            if (res && Array.isArray(res) && res.length > 0) {
                const data = res[0];
                setBinLevel(Number(data.value)); 
                setDustbinId(data.name); 
                setBinLocation(data.location); 
                setDustbinData(data); // Store the fetched data for rendering
            } else {
                console.error('Invalid response data format or empty array', res);
            }
        } catch (error) {
            console.error('Error fetching dustbin data', error);
        }
    }

    useEffect(() => {
        updateDustbinStatus(binLevel);
    }, [binLevel]);

    const updateDustbinStatus = (level: number) => {
        setBinPercentage(`${level}%`);

        if (level >= 100) {
            setBinStatus(`Full bin <i class="ri-delete-bin-3-line animated-red"></i>`);
            setBinLiquidColor('gradient-color-red');
        } else if (level > 35 && level <= 60) {
            setBinStatus(`Low bin <i class="ri-delete-bin-3-line animated-green"></i>`);
            setBinLiquidColor('gradient-color-orange');
        } else if (level <= 35) {
            setBinStatus(`Very Low <i class="ri-delete-bin-3-line green-color"></i>`);
            setBinLiquidColor('gradient-color-green');
        }
    };

    return (
        <section className="bin">
            <div className="bin-card" id={dustbinId}>
                <div className="bin-data">
                    <p className="bin-text">{dustbinId}</p>
                    <h1 className="bin-percentage">{binPercentage}</h1>
                    <p className="bin-status" dangerouslySetInnerHTML={{ __html: binStatus }} />
                    <p className="bin-loaction">{binLocation}</p>
                </div>
                <div className="bin-pill">
                    <div className="bin-level">
                        <div className={`bin-liquid ${binLiquidColor}`} style={{ height: binPercentage }}></div>
                    </div>
                </div>
               
            </div>
        </section>
    );
};


/**
 * Register as a Widget
 */
// registerWidget({
//     id: "iotproject",
//     widget: IotprojectWidget,
//     configs: {
//         layout: {
//             // w: 12,
//             // h: 12,
//             // minH: 12,
//             // minW: 12
//         }
//     }
// });

registerWidget({
    id: "dustbin",
    widget: DustbinWidget,
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
    id: "iotproject",
    label: "Iotproject",
    // click: () => alert("Hello"),
    component: IotprojectWidget
});
*/

/**
 * Register as a UI
 */

/*
registerUI({
   id:"iotproject",
   component: IotprojectWidget
});
*/


/**
 * Register as a Widget template
 * This will enable this widget to be edited through the designer
 */

/**
registerCustomWidgetTemplate({
    id: "iotproject", // use all lowercase letters
    name: 'Iotproject',
    description: 'Tempalte Description',
    template: IotprojectWidget,
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
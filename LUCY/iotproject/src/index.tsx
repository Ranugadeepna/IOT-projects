import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, enableLocalization, registerCustomWidgetTemplate, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper } from "uxp/components";
import { IWDDesignModeProps } from "widget-designer/components";
import BundleConfig from '../bundle.json';
import { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './styles.scss';
import './Dustbincardstyles.css';
import './sidebarStyles.css';


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
    const [dustbins, setDustbins] = useState<any[]>([]); // Array to hold the fetched dustbin data

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            const res = await props.uxpContext.executeAction('ranuga-exercise-model', 'getwastedata', {}, { json: true });
            if (res && Array.isArray(res) && res.length > 0) {
                setDustbins(res); // Store the fetched data for rendering
            } else {
                console.error('Invalid response data format or empty array', res);
            }
        } catch (error) {
            console.error('Error fetching dustbin data', error);
        }
    }

    const getBinStatus = (level: number) => {
        let status = '';
        let color = '';

        if (level >= 100) {
            status = `Full bin <i class="ri-delete-bin-3-line animated-red"></i>`;
            color = 'gradient-color-red';
        } else if (level > 60) {
            status = `Almost Full <i class="ri-delete-bin-3-line animated-orange"></i>`;
            color = 'gradient-color-red';
        } else if (level > 35) {
            status = `Low bin <i class="ri-delete-bin-3-line animated-yellow"></i>`;
            color = 'gradient-color-orange';
        } else {
            status = `Very Low <i class="ri-delete-bin-3-line animated-green"></i>`;
            color = 'gradient-color-green';
        }

        return { status, color };
    };

    return (
        <section className="bin">
            {dustbins.map((data) => {
                const { value, name, location } = data; // Destructure the properties you need
                const binLevel = Number(value);
                const { status, color } = getBinStatus(binLevel); // Get the status and color for the current bin
                const binPercentage = `${binLevel}%`; // Calculate the percentage

                return (
                    <div className="bin-card" id={name} key={name}>
                        <div className="bin-data">
                            <p className="bin-text">{name}</p>
                            <h1 className="bin-percentage">{binPercentage}</h1>
                            <p className="bin-status" dangerouslySetInnerHTML={{ __html: status }} />
                            <p className="bin-location">{location}</p>
                        </div>
                        <div className="bin-pill">
                            <div className="bin-level">
                                <div
                                    className={`bin-liquid ${color}`}
                                    style={{ height: binPercentage }} // Height should represent the bin level
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};



//side bar widget 

const SidebarWidget: React.FunctionComponent<IWidgetProps> = (props) => {

    return (
       
      <div className="sidebar">
      <img src="Red.jpg" alt="logo" className="logo"  />
   
   <ul className="sidebarnav">
     <li><a href="https://www.google.com/">BINS</a></li>
     <li><a href="#">CATEGORIES</a></li>
     <li><a href="#">SETTINGS</a></li>
   </ul>
 </div>
 
    );
};


//Stacked area chart

interface SChartWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}

const StackedAreaChartWidget: React.FunctionComponent<SChartWidgetProps> = (props) => {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 12800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

    return (
       

        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>


   
 
 
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

registerWidget({
    id: "sidebar",
    widget:SidebarWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }

});


registerWidget({
    id: "srchart",
    widget: StackedAreaChartWidget,
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
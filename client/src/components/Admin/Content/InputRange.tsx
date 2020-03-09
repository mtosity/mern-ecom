import * as React from 'react';
import { Range, getTrackBackground } from 'react-range';

interface props {
  step: number;
  min:number;
  max:number;
  values: number[];
  onChange: Function;
}

export const InputRange = ({step, min, max, values, onChange}: props) => {
  // const [state, setState] = React.useState({values: [50]})
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        <Range
          values={values}
          step={step}
          min={min}
          max={max}
          onChange={values => onChange(values)}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: '10px',
                display: 'flex',
                width: '50%'
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: '3px',
                  width: '100%',
                  borderRadius: '4px',
                  background: getTrackBackground({
                    values: values,
                    colors: ['#368D8D', '#1E2A31'],
                    min: min,
                    max: max
                  }),
                  alignSelf: 'center'
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '20px',
                width: '20px',
                borderRadius: '99px',
                backgroundColor: '#FFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 2px 6px #AAA',
                outline: 'none'
              }}
            >
              <div
                style={{
                  height: '16px',
                  width: '5px',
                  backgroundColor: isDragged ? '#548BF4' : '#CCC'
                }}
              />
            </div>
          )}
        />
        <output style={{ marginTop: '15px' }} id="output" className="text-admin-input">
          {values[0].toFixed(0)}
        </output>
      </div>
    );
}


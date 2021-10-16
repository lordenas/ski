import React, { FC, CSSProperties } from 'react';
import Select, { components, StylesConfig } from 'react-select';
import { MdKeyboardArrowDown } from 'react-icons/md';

type SelectComponentProps = {
    iconLeft?: string;
    label?: string;
    type?: string;
    placeholder?: string;
    id?: string;
    disabled?: boolean;
    error?: string;
    value: string;
    onChange: (val: string) => void;
    dataOption: Array<any>
}

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#ff6900',
    fontWeight: 600,
    fontSize: 12,
    padding: '0.75rem'
};

const groupBadgeStyles: CSSProperties = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};


const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const customStyles: StylesConfig<ColourOption>  = {
  control: (styles, state) => ({ 
    ...styles, 
    backgroundColor: 'white',
    border: state.isFocused ? 'none' : '1px solid var(--color-dop)',
    height: '2.5rem',
    boxShadow: state.isFocused ? '0px 0px 4px 2px RGBA(255, 105, 0, 0.51)' : '0'
    //padding: '1rem'
    //boxShadow: state.isFocused ? 1 : 0
  }),
  option: (provided, state) => ({
    ...provided,
    padding: '0.75rem 1.5rem',
    fontSize: 14,
    cursor: 'pointer',
    color: state.isSelected ? '#000' : '#6E6D7A'
  }),
  input: (provided, state) => ({
    ...provided,
    fontSize: 14,
    fontWeight: 400,
    //...dot()
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: 14,
    fontWeight: 400,
    color: 'var(--color-secondary)'
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transition: 'all .2s ease',
    transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)'
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    backgroundColor: '#FFF'
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#6E6D7A',
    fontSize: 14
    //...dot()
  })
}



const formatGroupLabel = (data: GroupedOption) => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);

const DropdownIndicator = (props: any) => {
  console.log('props', props)
  return (
    <components.DropdownIndicator {...props}>
      <MdKeyboardArrowDown />
    </components.DropdownIndicator>
  );
};

const SelectComponent: FC<SelectComponentProps> = (props) => {
    return (
        <div className="app-select">
            {
                props.iconLeft &&
                <span className="app-input__icon">

                </span>
            }
            {
                props.label &&
                    <label className="app-input__label" id={props.id}>{ props.label }</label>
            }
            <Select<any, false, GroupedOption>
                options={props.dataOption}
                classNamePrefix="app-select"
                components={{ DropdownIndicator }}
                placeholder={props.placeholder || ''}
                formatGroupLabel={formatGroupLabel}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 8,
                  border: '1px solid #000',
                  colors: {
                    ...theme.colors,
                    primary: '#ff6900',
                    primary25: 'rgb(255, 105, 0, 0.2)',
                  },
                })}
                noOptionsMessage={() => <span>Список пуст</span>}
                //@ts-ignore
                styles={customStyles}
            />
        </div>
    )
}

export default SelectComponent;





export interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }
  
  export const colourOptions: readonly ColourOption[] = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];
  
  export interface FlavourOption {
    readonly value: string;
    readonly label: string;
    readonly rating: string;
  }
  
  export const flavourOptions: readonly FlavourOption[] = [
    { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
    { value: 'chocolate', label: 'Chocolate', rating: 'good' },
    { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
    { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
  ];
  
  export interface StateOption {
    readonly value: string;
    readonly label: string;
  }
  
  export const stateOptions: readonly StateOption[] = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AS', label: 'American Samoa' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'DC', label: 'District Of Columbia' },
    { value: 'FM', label: 'Federated States Of Micronesia' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'GU', label: 'Guam' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MH', label: 'Marshall Islands' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'MP', label: 'Northern Mariana Islands' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PW', label: 'Palau' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'PR', label: 'Puerto Rico' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VI', label: 'Virgin Islands' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' },
  ];
  
  export const optionLength = [
    { value: 1, label: 'general' },
    {
      value: 2,
      label:
        'Evil is the moment when I lack the strength to be true to the Good that compels me.',
    },
    {
      value: 3,
      label:
        "It is now an easy matter to spell out the ethic of a truth: 'Do all that you can to persevere in that which exceeds your perseverance. Persevere in the interruption. Seize in your being that which has seized and broken you.",
    },
  ];
  
  export const dogOptions = [
    { id: 1, label: 'Chihuahua' },
    { id: 2, label: 'Bulldog' },
    { id: 3, label: 'Dachshund' },
    { id: 4, label: 'Akita' },
  ];
  
  // let bigOptions = [];
  // for (let i = 0; i < 10000; i++) {
  // 	bigOptions = bigOptions.concat(colourOptions);
  // }
  
  export interface GroupedOption {
    readonly label: string;
    readonly options: readonly ColourOption[] | readonly FlavourOption[];
  }
  
  export const groupedOptions: readonly GroupedOption[] = [
    {
      label: 'Colours',
      options: colourOptions,
    },
    {
      label: 'Flavours',
      options: flavourOptions,
    },
  ];
  
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import React, { FC } from "react";
import style from "../../assets/css/earn.module.css"
import logo from "../../assets/img/your_positions.6b8daf65.svg"
import TextField from '@mui/material/TextField';

interface PositionProps {

}

const Plateform = [
    'All',
    'ApeSwap',
    'PancakeSwap',
];

const Type = [
    'All',
    'Single Assets',
    'Liquidity Assetes',
];

const Position: FC<PositionProps> = (props: PositionProps) => {
    const [type, setType] = React.useState(['All']);

    const handleChange = (event: any) => {
        const {
            target: { value },
        } = event;
        setType(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div className={style.positions}>
            <img src={logo} alt="icon" />
            <div className={`${style.s_text} ${style.s_h4} ${style.s_weight_bold}`}>
                Your Positions
            </div>
            <span className={`${style.s_text} ${style.s_body2} ${style.s_secondary_color}`}>
                <span className={`${style.s_text} ${style.s_body2} ${style.s_secondary_color} ${style.s_text_numbers}`}>
                    (0 position in total)
                </span>
            </span>
            <FormControl sx={{ m: 1, width: 150, border: '1px grey solid', borderRadius: 1 }}>
                <InputLabel id="demo-multiple-name-label" style={{color: 'white'}}>Name</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={type}
                    onChange={handleChange}
                    input={<OutlinedInput label="Type" />}
                    style={{color: 'white'}}
                    // MenuProps={MenuProps}
                >
                    {Type.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            // style={getStyles(name, type, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1,border: '1px grey solid', borderRadius: 1, width: 150 }}>
                <InputLabel id="demo-multiple-name-label" style={{color: 'white'}}>Name</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={type}
                    onChange={handleChange}
                    input={<OutlinedInput label="Type" />}
                    style={{color: 'white'}}
                    // MenuProps={MenuProps}
                >
                    {Type.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            // style={getStyles(name, type, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: 200, border: '1px grey solid', borderRadius: 1, color: 'white' }}>
                <TextField label="Search" variant="outlined" sx={{width: 200}} style={{color: 'white'}}/>
            </FormControl>
        </div>
    )
}

export default Position


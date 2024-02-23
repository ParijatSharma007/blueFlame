import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 0.1,
        label: '',
    },
    {
        value: 0.2,
        label: '',
    },
    {
        value: 0.3,
        label: '0.3',
    },
    {
        value: 0.4,
        label: '',
    },
    {
        value: 0.5,
        label: '',
    },
    {
        value: 0.6,
        label: '0.6',
    },
    {
        value: 0.7,
        label: '',
    },
    {
        value: 0.8,
        label: '',
    },
    {
        value: 0.9,
        label: '',
    },
    {
        value: 1,
        label: '1.0',
    }


];





function valueLabelFormat(value: number) {

    let str = 'Low: More consistent and often accurate responses'

    if (value > 0 || value <= 0.3) {
        str = 'Low: More consistent and often accurate responses'
    }


    if (value > 0.3 || value <= 0.6) {
        str = 'Medium: Some creativity and less accuracy'
    }


    if (value > 0.7 || value <= 1) {
        str = 'High: High creativity but high risk of hallucinations'
    }







    return str + value;

}




export default function DiscreteSliderValues() {
    return (
        <Box sx={{ width: 300 }}>
            <Slider
                aria-label="Restricted values"
                defaultValue={0}
                valueLabelFormat={valueLabelFormat}


                step={null}
                valueLabelDisplay="auto"
                marks={marks}
                min={0}
                max={1}
            />
        </Box>
    );
}

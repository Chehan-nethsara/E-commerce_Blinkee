import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Title from '../Feedback/title';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    btnChart:{
        marginBottom: 20,
    },
});

export default function Chart() {
    const theme = useStyles();

    return (
        <React.Fragment>
            <Title><h1>Customer Feedback</h1></Title>
            <p>
                We were wondering if you could spare a few minutes to let us know
                what we are getting right and what we can improve. If you are game just
                click on the button below "Get Start"
            </p>
            <div>
                <br/>
                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    className={theme.btnChart}
                >
                    Get Start
                </Button>
            </div>
            {/*<ResponsiveContainer>*/}
            {/*    <LineChart*/}
            {/*        data={data}*/}
            {/*        margin={{*/}
            {/*            top: 16,*/}
            {/*            right: 16,*/}
            {/*            bottom: 0,*/}
            {/*            left: 24,*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        <XAxis dataKey="time" stroke={theme.palette.text.secondary} />*/}
            {/*        <YAxis stroke={theme.palette.text.secondary}>*/}
            {/*            <Label*/}
            {/*                angle={270}*/}
            {/*                position="left"*/}
            {/*                style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}*/}
            {/*            >*/}
            {/*                Sales ($)*/}
            {/*            </Label>*/}
            {/*        </YAxis>*/}
            {/*        <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />*/}
            {/*    </LineChart>*/}
            {/*</ResponsiveContainer>*/}
        </React.Fragment>
    );
}
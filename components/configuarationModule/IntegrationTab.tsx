import Grid from "@mui/material/Grid";
import { useMemo } from "react";
import IntegrationCard from "../IntetrationCard/IntegrationCard";

export const dummyData = [
    {
        "_id": "6475e02264ac3c2f09faf86b",
        "title": "Rich",
        "desc": "laboris eu amet est in nisi minim mollit amet occaecat"
    },
    {
        "_id": "6475e0223007d8b8f4538291",
        "title": "Clements",
        "desc": "mollit nostrud sit ea nisi nisi nulla excepteur tempor ex"
    },
    {
        "_id": "6475e0222bb12e9ee83ec031",
        "title": "Delores",
        "desc": "tempor culpa mollit nisi id id enim nostrud ipsum cillum"
    },
    {
        "_id": "6475e022726076d474ddc9b3",
        "title": "Carr",
        "desc": "do aute dolor velit mollit velit nostrud quis nostrud labore"
    },
    {
        "_id": "6475e02212e3f54dede0b59f",
        "title": "Maddox",
        "desc": "cillum ex aute anim reprehenderit fugiat elit fugiat veniam laboris"
    },
    {
        "_id": "6475e022c30f7b4bf5668279",
        "title": "Dale",
        "desc": "eiusmod ea qui culpa tempor cupidatat esse laborum esse pariatur"
    },
    {
        "_id": "6475e022f7cb354883998dce",
        "title": "Rochelle",
        "desc": "occaecat occaecat veniam nostrud ea do ut Lorem aute dolor"
    },
    {
        "_id": "6475e022eb91121ada396732",
        "title": "Dolly",
        "desc": "sit sint Lorem voluptate Lorem eu Lorem elit excepteur magna"
    },
    {
        "_id": "6475e0221eeb6fa5920aadbc",
        "title": "Lizzie",
        "desc": "deserunt minim eiusmod incididunt ad ad ex culpa anim fugiat"
    },
    {
        "_id": "6475e022a156bf4b642ef054",
        "title": "Miranda",
        "desc": "et irure sit pariatur Lorem labore ea mollit voluptate incididunt"
    },
    {
        "_id": "6475e022feb26308611543eb",
        "title": "Karla",
        "desc": "quis do aute in consectetur aute et qui in excepteur"
    },
    {
        "_id": "6475e02280f6163cda83225c",
        "title": "Nunez",
        "desc": "fugiat ipsum in aute proident elit voluptate irure do nulla"
    },
    {
        "_id": "6475e022410caba9fa8a8362",
        "title": "Lacey",
        "desc": "non pariatur do voluptate ullamco aute ea veniam ullamco excepteur"
    },
    {
        "_id": "6475e02210d410880d78fb8e",
        "title": "Geraldine",
        "desc": "sit magna enim anim do elit ad sint ut est"
    },
    {
        "_id": "6475e022a33fb8c9dd9b9194",
        "title": "Jaime",
        "desc": "tempor do irure ipsum excepteur officia consequat mollit eiusmod aliquip"
    },
    {
        "_id": "6475e0227db94210324da0af",
        "title": "Tasha",
        "desc": "duis in proident dolor mollit tempor fugiat do in cupidatat"
    }
]

const IntegrationTab = () => {



    const RenderUi = useMemo(() => {
        return dummyData.map((_item) => {
            return (
                <Grid item xs={6} sm={6} md={4} lg={3} xl={2.4} key={_item?._id}>
                    <IntegrationCard title={_item?.title} desc={_item?.desc} />
                </Grid>
            )
        })
    }, [dummyData])



    return <Grid container rowSpacing={3} columnSpacing={4}>

        {
            RenderUi


        }

    </Grid>
}

export default IntegrationTab
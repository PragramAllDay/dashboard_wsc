import { Card, CardContent, Typography } from "@mui/material";
import { Reorder } from "framer-motion";
import { useState } from "react";
import { IconGripVertical } from "@tabler/icons-react";
import './style.css'

const sampleData = [
    {
        id: 1,
        content: "Apparel & Clothing"
    },
    {
        id: 2,
        content: "Costumes & Fancy Dress"
    },
    {
        id: 3,
        content: "Home & Decor"
    },
    {
        id: 4,
        content: "Leather Products"
    },
    {
        id: 5,
        content: "Travel & Bags"
    },
]


const Draggable = () => {
    const [items, setItems] = useState(sampleData)

    const handleReorder = (newItems: any) => {
        setItems(newItems)
    }

    return (
        <Reorder.Group className="drag-container" axis={"y"} values={items} onReorder={handleReorder}>
            {
                items?.map((element: any) => (
                    <Reorder.Item
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        value={element}
                        key={element.id}
                        className="drag-item drag-pointer"
                    >
                        <Card>
                            <CardContent className="drag-item-content">
                                <Typography fontWeight={500} fontSize={16}>
                                    {element.content}
                                </Typography>
                                <IconGripVertical />
                            </CardContent>
                        </Card>
                    </Reorder.Item>
                ))
            }
        </Reorder.Group>
    );
};

export default Draggable;

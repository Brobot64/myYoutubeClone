import React from 'react'
import { Stack } from "@mui/material"
import { categories } from '../utils/constants'

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {
        categories.map((category) => (
          <button
            className="category-btn"
            onClick={() => setSelectedCategory (category.name) }
            style={{
              background: category.name === selectedCategory && '#FC1503',
              color: 'white',
            }}
            key={category.name}
          >
            <span style={{ color: 'rgb(243, 21, 3)', paddingRight: 3 }}>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))
      }
    </Stack>
  )
}

export default SideBar
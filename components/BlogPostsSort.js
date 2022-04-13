import PropTypes from 'prop-types'
// material
import { MenuItem, TextField } from '@mui/material'

// ----------------------------------------------------------------------

BlogPostsSort.propTypes = {
    options: PropTypes.array,
    onSort: PropTypes.func,
}

export default function BlogPostsSort() {
    const options = [
        { value: 'latest', label: 'Latest' },
        { value: 'popular', label: 'Popular' },
        { value: 'oldest', label: 'Oldest' },
    ]
    return (
        <TextField select size="small" value="latest">
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    )
}

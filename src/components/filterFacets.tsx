import {
  Box,
  capitalize,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";

type filterProps = {
  category: string;
  filters: string[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function FilterFacets({ category, filters, handleChange }: filterProps) {
  return (
    <Box p={2}>
      <FormLabel component="legend">{capitalize(category)}</FormLabel>
      <FormGroup>
        {filters.map((filter) => {
          return (
            <FormControlLabel
              key={filter}
              control={<Checkbox onChange={(e) => handleChange(e)} />}
              label={filter}
              name={category}
              value={filter}
            />
          );
        })}
      </FormGroup>
      
    </Box>
  );
}

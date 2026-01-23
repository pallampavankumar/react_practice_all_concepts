import { Skeleton, Stack } from "@mui/material";

export default function SkeletonExample() {
  return (
    <Stack spacing={2}>
      <Skeleton variant="text" width={200} />
      <Skeleton variant="rectangular" width={300} height={100} />
      <Skeleton variant="circular" width={40} height={40} />
    </Stack>
  );
}

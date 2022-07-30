import React, { Fragment, ReactElement, useState } from "react";
import {
  ButtonBase,
  Card,
  CardMedia,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

import { MediaType } from "./Types";

interface SliderProps {
  hideCaption?: boolean;
  hidePaper?: boolean;
  hideTitle?: boolean;
  media: MediaType;
  showAsImage?: boolean;
}

function Image({
  hideCaption,
  hidePaper,
  hideTitle,
  media,
  showAsImage,
}: SliderProps): ReactElement {
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const openMediaDialog = () => setShowDialog(true);
  const closeMediaDialog = () => setShowDialog(false);

  return (
    <Fragment>
      <ButtonBase
        sx={{ width: !showAsImage ? "100%" : "initial" }}
        onClick={openMediaDialog}
      >
        <Card sx={{ width: "100%" }} elevation={hidePaper ? 0 : 1}>
          {showAsImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={media.url} alt={media.alternativeText} />
          ) : (
            <CardMedia
              image={media.url}
              title={media.alternativeText}
              sx={{ width: "100%", height: 420, backgroundSize: "contain" }}
            />
          )}
          {!hideTitle ? (
            <Typography variant="h5">{media.alternativeText}</Typography>
          ) : (
            ""
          )}
        </Card>
      </ButtonBase>
      <Dialog
        aria-describedby="scroll-dialog-description"
        aria-labelledby="scroll-dialog-title"
        maxWidth="xl"
        scroll="body"
        open={showDialog}
        onClick={closeMediaDialog}
        onClose={closeMediaDialog}
      >
        {showDialog ? (
          <Fragment>
            {!hideTitle && media.alternativeText ? (
              <DialogTitle>
                <Typography variant="h3">{media.alternativeText}</Typography>
              </DialogTitle>
            ) : (
              ""
            )}
            <DialogContent>
              {!hideCaption && media.caption ? (
                <Typography variant="body1" gutterBottom>
                  {media.caption}
                </Typography>
              ) : (
                ""
              )}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={media.url} alt={media.alternativeText} />
            </DialogContent>
          </Fragment>
        ) : (
          ""
        )}
      </Dialog>
    </Fragment>
  );
}

export default Image;

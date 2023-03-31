import { extendTheme } from "native-base";
import { type Dict } from "native-base/lib/typescript/theme/tools";
import colors from "./colors";
import textTheme from "./text";

export const theme = extendTheme({
  colors: colors,
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  components: {
    Button: {
      baseStyle: () => ({
        borderRadius: 0,
        paddingTop: 4,
        paddingBottom: 4,

        _text: {
          textTransform: "uppercase",
          letterSpacing: 1.2,
          fontWeight: 500,
          fontSize: 12,
        },
      }),
      defaultProps: {
        size: "md",
      },
      sizes: {
        sm: {
          minHeight: "26px",
          height: 10,
          paddingTop: 2,
          paddingBottom: 2,
        },
        md: {
          _icon: {
            height: 18,
            marginRight: 1,
          },
          _text: {
            fontWeight: 500,
            fontSize: 12,
          },
        },
      },
      variants: {
        primary: (props: Dict) => {
          return {
            bg: props.disabled ? "neutral.700" : "primary.500",
            minHeight: "56px",
            _icon: {
              color: props.disabled ? "neutral.500" : "neutral.100",
            },
            _pressed: {
              bg: "primary.700",
              _icon: {
                color: "neutral.200",
              },
              _text: {
                color: "neutral.200",
              },
            },
            _text: {
              color: props.disabled ? "neutral.500" : "neutral.100",
            },
          };
        },
        secondary: (props: Dict) => {
          return {
            bg: undefined,
            borderWidth: 1,
            borderColor: "neutral.500",
            minHeight: "56px",
            _icon: {
              color: props.disabled ? "neutral.500" : "neutral.100",
            },
            _pressed: {
              borderColor: "neutral.600",
              _icon: {
                color: "neutral.200",
              },
              _text: {
                color: "neutral.200",
              },
            },
            _text: {
              color: props.disabled ? "neutral.500" : "neutral.100",
            },
          };
        },
      },
    },
    Text: textTheme,
  },
});

export default theme;

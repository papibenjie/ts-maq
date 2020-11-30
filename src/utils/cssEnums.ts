enum EBase {
    None = 'none',
    Initial = 'initial',
    Inherit = 'inherit',
}

enum EBorderStyle {
    Hidden = 'hidden',
    Dotted = 'dotted',
    Dashed = 'dashed',
    Solid = 'solid',
    Double = 'double',
    Groove = 'groove',
    Ridge = 'ridge',
    Inset = 'inset',
    Outset = 'outset',
} 

export const ECssBorderStyle = { ...EBase, ...EBorderStyle }
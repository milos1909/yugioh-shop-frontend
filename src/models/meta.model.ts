export interface MetaModel {
    generated: Date
    current_rows: number
    total_rows: number
    rows_remaining: number
    total_pages: number
    pages_remaining: number
    previous_page: string | null
    previous_page_offset: number | null
    next_page: string | null
    next_page_offset: number 
}
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://liveline.kavachinnovations.com';
export const IMAGE_URL = "https://cricimages.kavachinnovations.com/"
type ApiResponse<T> = {
    data: T | null;
    error: string | null;
};

async function handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
    if (!response.ok) {
        const errorData = await response.json();
        return { data: null, error: errorData?.message || `HTTP error! status: ${response.status}` };
    }
    try {
        const data = await response.json();
        return { data, error: null };
    } catch (parseError) {
        return { data: null, error: 'Failed to parse JSON' };
    }
}

export const get = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return handleResponse<T>(response);
    } catch (error: any) {
        return { data: null, error: error.message || 'Failed to fetch data' };
    }
};

export const post = async <T>(endpoint: string, body: any): Promise<ApiResponse<T>> => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        return handleResponse<T>(response);
    } catch (error: any) {
        return { data: null, error: error.message || 'Failed to post data' };
    }
};

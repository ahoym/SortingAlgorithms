import java.util.*;

public class bubble {
	
	public static void bubbleSort( int[] arr )
	{
		int j;
		boolean sorted = false;
		int temp;

		while (!sorted) {
			sorted = true;
			for( j = 0; j < arr.length - 1; j++ ) {
				if ( arr[j] > arr[j+1] ) {
					temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
					sorted = false;
				} 
			} 
		} 
	}
	
	public static void main(String[] args) {
		int[] arr = { 2,5,3,6,1 };
		bubbleSort(arr);
		System.out.println(Arrays.toString(arr));
	} 
}
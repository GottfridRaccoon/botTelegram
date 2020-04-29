    """Finds the distance of two arrays by dynamic time warping method
    source: https://en.wikipedia.org/wiki/Dynamic_time_warping

    Dependencies:
        import numpy as np
     Args:
        x, y: arrays
        d: distance function, default is absolute difference
        scaled: boolean, should arrays be scaled before calculation
        fill: boolean, should NA values be filled with 0
    returns:
        distance as float, 0.0 means series are exactly same, upper limit is infinite
    """


 """Scales array to 0-1

    Dependencies:
        import numpy as np
    Args:
        x: mutable iterable array of float
    returns:
        scaled x
    """

'''
        Work-flow
        1 - make series combination with size n, initial clusters
        2 - assign closest series to each cluster
        3 - calculate total distance for each combinations
        4 - choose the minimum

        Args:
            series: dict, keys can be anything, values are time series as list, assumes no nulls
            n: int, cluster size
            scale: bool, if scale needed
        '''
 '''
        Assigns the serie to appropriate cluster

        Args:
            serie, dict: 1 element dict
            save, bool: if new serie is stored to clusters

        Return:
            str, assigned cluster key
        '''
